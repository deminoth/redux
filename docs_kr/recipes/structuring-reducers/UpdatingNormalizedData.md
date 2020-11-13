---
id: updating-normalized-data
title: 정규화된 데이터 업데이트하기
description: '리듀서 구조 잡기 > 정규화된 데이터 업데이트하기: Patterns for updating normalized data'
hide_title: true
---

# 정규화된 데이터 업데이트하기

[상태 정규화하기](./NormalizingStateShape.md)에서 언급한 것처럼 Normalizr 라이브러리는 중첩된 데이터를 저장소에 통합하기에 적합한 형태로 변환하는데 자주 사용됩니다. 하지만 애플리케이션 다른 곳에서 사용되고 있는 정규화 된 데이터에 대한 업데이트를 실행하는것에 대한 문제는 해결되지 않습니다. 이때 선호에 따라 다양한 접근이 가능합니다. 우리는 포스트에 새 댓글을 추가하는 예를 사용합니다.

## 일반적인 접근

### 간단한 병합

한 가지 방법은 기존 상태의 액션의 컨텐츠에 병합하는 겁니다. 이 경우에 우리는 얕은 복사가 아니라 깊은 재귀병합을 해야 합니다. Lodash의 `merge`함수는 이를 처리할 수 있습니다:

```js
import merge from 'lodash/merge'

function commentsById(state = {}, action) {
  switch (action.type) {
    default: {
      if (action.entities && action.entities.comments) {
        return merge({}, state, action.entities.comments.byId)
      }
      return state
    }
  }
}
```

이는 리듀서의 측면에서 최소의 작업량을 필요로합니다. 하지만 액션생성자는 액션을 디스패치하기 전에 적당한 형태로 구성하기 위해 두배의 작업을 필요로 합니다. 또한, 항목삭제에 대해서도 처리하지 않습니다.

### 슬라이스 리듀서 구성

만약 우리에게 슬라이스 리듀서가 중첩된 트리가 있다면 각 슬라이스 리듀서는 액션에 적절히 응답하는 법을 알고 있어야 합니다. 댓글 ID와 적절한 포스트 객체를 업데이트하고 해당 키를 ID로 하는 새로운 댓글 객체를 만들어야합니다. 또한 전체 댓글 ID 리스트에 댓글의 ID를 포함시켜야 합니다.
여기선 이 조각들이 어떻게 맞을지를 보여줍니다.

```js
// actions.js
function addComment(postId, commentText) {
  // 유니크한 댓글 ID를 생성합니다.
  const commentId = generateId('comment')

  return {
    type: 'ADD_COMMENT',
    payload: {
      postId,
      commentId,
      commentText
    }
  }
}

// reducers/posts.js
function addComment(state, action) {
  const { payload } = action
  const { postId, commentId } = payload

  // 남은 코드를 단순화하기 위해 적절한 포스트를 찾습니다.
  const post = state[postId]

  return {
    ...state,
    // 포스트 객체를 새로운 "댓글" 배열로 업데이트합니다.
    [postId]: {
      ...post,
      comments: post.comments.concat(commentId)
    }
  }
}

function postsById(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return addComment(state, action)
    default:
      return state
  }
}

function allPosts(state = [], action) {
  // 생략 - 이 예제에서 아무런 일도 하지않습니다.
}

const postsReducer = combineReducers({
  byId: postsById,
  allIds: allPosts
})

// reducers/comments.js
function addCommentEntry(state, action) {
  const { payload } = action
  const { commentId, commentText } = payload

  // 새 댓글 객체 생성
  const comment = { id: commentId, text: commentText }

  // 새 댓글 객체를 업데이트된 룩업테이블에 삽입
  return {
    ...state,
    [commentId]: comment
  }
}

function commentsById(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return addCommentEntry(state, action)
    default:
      return state
  }
}

function addCommentId(state, action) {
  const { payload } = action
  const { commentId } = payload
  // 새 댓글 ID를 전체 ID 리스트에 추가
  return state.concat(commentId)
}

function allComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return addCommentId(state, action)
    default:
      return state
  }
}

const commentsReducer = combineReducers({
  byId: commentsById,
  allIds: allComments
})
```

이 예제는 모든 슬라이스 리듀서와 케이스 리듀서를 어떻게 맞추고 있는지 보여주고 있기 때문에 꽤 깁니다. 여기에서 위임에 유의하세요. `postsById` 슬라이스 리듀서는 새로운 댓글 ID를 적절한 포스트에 삽입하는 작업을 `addComment`에 위임합니다. 반면 `commentsById`와 `allComments` 슬라이스 리듀서는 댓글 룩업테이블과 전체 댓글 ID를 적절히 업데이트하는 자신의 케이스 리듀서를 가지고 있습니다.

## 다른 접근

### 작업 기반의 업데이트

리듀서는 단순한 함수이기 때문에 로직을 나누는 수많은 방법이 있습니다. 슬라이스 리듀서의 사용은 분명 일반적이지만, 더욱 작업 지향적인 구조로 구성할 수 있습니다. 종종 많은 중첩된 업데이트를 포함할 수 있기 때문에 업데이트 구문을 단순화하기위해 [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable) 나 [object-path-immutable](https://github.com/mariocasciaro/object-path-immutable)와 같은 불변 업데이트 유틸리티를 사용할겁니다. 아마 다음과 같습니다.

```js
import posts from "./postsReducer";
import comments from "./commentsReducer";
import dotProp from "dot-prop-immutable";
import {combineReducers} from "redux";
import reduceReducers from "reduce-reducers";

const combinedReducer = combineReducers({
    posts,
    comments
});


function addComment(state, action) {
    const {payload} = action;
    const {postId, commentId, commentText} = payload;

    // 이곳의 상태는 전체가 결합된 상태입니다.
    const updatedWithPostState = dotProp.set(
        state,
        `posts.byId.${postId}.comments`,
        comments => comments.concat(commentId)
    );

    const updatedWithCommentsTable = dotProp.set(
        updatedWithPostState,
        `comments.byId.${commentId}`,
        {id : commentId, text : commentText}
    );

    const updatedWithCommentsList = dotProp.set(
        updatedWithCommentsTable,
        `comments.allIds`,
        allIds => allIds.concat(commentId);
    );

    return updatedWithCommentsList;
}

const featureReducers = createReducer({}, {
    ADD_COMMENT : addComment,
});

const rootReducer = reduceReducers(
    combinedReducer,
    featureReducers
);
```

'"ADD_COMMENTS"'의 경우 이 접근은 어떤 일이 일어나는지 매우 명확하게 만듭니다. 하지만 이는 중첩된 업데이트 로직과 특정 상태 트리의 모양에 대한 지식을 필요로합니다. 리듀서 로직을 어떻게 구성하길 원하는지에 따라 원하는 결과일 수도, 아닐 수도 있습니다.

### 리덕스-ORM

[리덕스-ORM](https://github.com/tommikaikkonen/redux-orm)라이브러리는 리덕스 저장소에서 정규화된 데이터를 관리하기 위해 매우 유용한 추상 계층을 제공합니다. 이는 모델 클래스를 선언하고 그들의 관계를 정의할 수 있게 합니다. 데이터 타입에 빈 "테이블"을 생성하고 데이터를 제공하는 특수한 선택 도구의 역할로 불변 데이터의 업데이트를 수행합니다.

리덕스-ORM를 사용해서 업데이트를 수행하는 몇 가지 방법이 있습니다. 첫번째로 리덕스-ORM 도큐먼트에서는 각 모델의 서브 클래스에서 리듀서 함수를 정의하면 저장소에 리듀서가 자동 생성되어 결합합니다.

```js
// models.js
import { Model, many, Schema } from 'redux-orm'

export class Post extends Model {
  static get fields() {
    return {
      // many-sided 관계정의 - 하나의 포스트가 여러 댓글을 가질 수 있음.
      // "comments"라는 필드로
      comments: many('Comment')
    }
  }

  static reducer(state, action, Post) {
    switch (action.type) {
      case 'CREATE_POST': {
        // 포스트 인스턴스 생성 대기
        Post.create(action.payload)
        break
      }
      case 'ADD_COMMENT': {
        const { payload } = action
        const { postId, commentId } = payload
        // 해당 포스트 인스턴스와 댓글 ID사이의 관계 추가를 위한 대기
        Post.withId(postId).comments.add(commentId)
        break
      }
    }

    // 리덕스-ORM은 반환 된 후 자동으로 큐를 업데이트합니다.
  }
}
Post.modelName = 'Post'

export class Comment extends Model {
  static get fields() {
    return {}
  }

  static reducer(state, action, Comment) {
    switch (action.type) {
      case 'ADD_COMMENT': {
        const { payload } = action
        const { commentId, commentText } = payload

        // 댓글 인스턴스 생성 대기
        Comment.create({ id: commentId, text: commentText })
        break
      }
    }

    // 리덕스-ORM은 반환 된 후 자동으로 큐를 업데이트합니다.
  }
}
Comment.modelName = 'Comment'

// 스키마 인스턴스 생성, 포스트와 댓글 연결
export const schema = new Schema()
schema.register(Post, Comment)

// main.js
import { createStore, combineReducers } from 'redux'
import { schema } from './models'

const rootReducer = combineReducers({
  // 자동 생성된 리덕스-ORM 리듀서를 삽입합니다. 이는 "테이블" 모델을
  // 초기화하고 각 모델의 서브클래스에 정의된 리듀서로직과 연결합니다.
  entities: schema.reducer()
})

// 포스트 인스턴스를 만들기 위한 액션을 디스패치합니다.
store.dispatch({
  type: 'CREATE_POST',
  payload: {
    id: 1,
    name: 'Test Post Please Ignore'
  }
})

// Dispatch an action to create a Comment instance as a child of that Post
// 해당 포스트의 자식으로 댓글 인스턴스를 만들기 위한 액션을 디스패치합니다.
store.dispatch({
  type: 'ADD_COMMENT',
  payload: {
    postId: 1,
    commentId: 123,
    commentText: 'This is a comment'
  }
})
```

리덕스-ORM 라이브러리는 적용할 업데이트의 내부 큐를 유지합니다. 이후 업데이트는 불변하게 적용되므로 업데이트 프로세스가 단순해집니다.

리덕스-ORM을 사용하는 또 다른 방법은 한 케이스의 리듀서내에서 추상 계층으로 사용하는 겁니다.

```js
import { schema } from './models'

// 여기서 리듀서가 "entities" 슬라이스 리듀스 내에서 사용되고 있다고 가정하고
// 리덕스-ORM 모델의 서브클래스에 리듀서가 정의되어있지 않습니다.
function addComment(entitiesState, action) {
  const session = schema.from(entitiesState)
  const { Post, Comment } = session
  const { payload } = action
  const { postId, commentId, commentText } = payload

  const post = Post.withId(postId)
  post.comments.add(commentId)

  Comment.create({ id: commentId, text: commentText })

  return session.reduce()
}
```

전반적으로, 리덕스-ORM은 데이터 타입 간의 관계를 정의하고, 상태에서 "테이블"을 생성하고, 관계형 데이터를 검색 및 비정규화하고, 관계형 데이터에 불변성을 적용하는 업데이트를 하는 매우 유용한 추상화 세트를 제공합니다.
