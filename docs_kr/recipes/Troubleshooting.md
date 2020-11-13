---
id: troubleshooting
title: 문제해결
hide_title: true
---

# 문제해결

여기는 일반적인 문제들과 그 해결책들을 공유하는 곳입니다.
예제는 React를 사용하지만, 다른 뭔가를 쓰더라도 유용할겁니다.

### 액션을 디스패치했는데 아무 일도 일어나지 않는다

액션을 디스패치하려 했지만 뷰가 바뀌지 않는 경우가 있습니다. 왜 그럴까요? 몇 가지 이유가 있을 수 있습니다.

#### 리듀서의 인수들을 절대 변경(mutate)하지 마세요

Redux가 전달한 `state`나 `action`을 수정하고 싶어질 때가 있습니다. 그러지 마세요!

Redux는 리듀서에 주어진 객체를 절대 변경하지 않을 것이라고 가정합니다. **언제나 새 상태 객체를 반환하세요.** [Immutable](https://facebook.github.io/immutable-js/) 같은 라이브러리를 사용하지 않더라도, 변경은 언제나 피해야 합니다.

불변성은 [react-redux](https://github.com/gaearon/react-redux)가 잘 다듬어진 업데이트를 구독하도록 해줍니다. [redux-devtools](http://github.com/gaearon/redux-devtools)을 통한 시간여행같은 멋진 개발자 기능도 가능하게 해주고요.

예를 들어 아래와 같은 리듀서는 상태를 변경하기 때문에 틀렸습니다:

```js
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // Wrong! This mutates state
      state.push({
        text: action.text,
        completed: false
      })
      return state
    case 'COMPLETE_TODO':
      // Wrong! This mutates state[action.index].
      state[action.index].completed = true
      return state
    default:
      return state
  }
}
```

이렇게 고쳐야 합니다:

```js
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // Return a new array
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      // Return a new array
      return state.map((todo, index) => {
        if (index === action.index) {
          // Copy the object before mutating
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}
```

코드는 더 많지만 이게 바로 Redux를 예측 가능하고 능률적으로 만들어줍니다. 코드를 더 줄이고 싶다면 [`React.addons.update`](https://facebook.github.io/react/docs/update.html)과 같은 헬퍼를 써서 간단한 문법으로 불변형 변환을 작성할 수 있습니다:

```js
// Before:
return state.map((todo, index) => {
  if (index === action.index) {
    return Object.assign({}, todo, {
      completed: true
    })
  }
  return todo
})

// After
return update(state, {
  [action.index]: {
    completed: {
      $set: true
    }
  }
})
```

마지막으로, 객체를 업데이트하기 위해 Underscore의 `_.extend` 같은 것들이나, 더 좋은 [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 폴리필 등을 사용할 수 있습니다.

`Object.assign`을 올바르게 사용하도록 하세요. 예를 들어 리듀서에서 `Object.assign(state, newData)` 처럼 반환하는 대신 `Object.assign({}, state, newData)`처럼 반환해야 합니다. 이렇게 하면 이전의 `state`를 덮어쓰지 않게 됩니다.

더 간결한 문법을 위해 [object spread operator proposal](recipes/UsingObjectSpreadOperator.md)을 사용할 수도 있습니다:

```js
// Before:
return state.map((todo, index) => {
  if (index === action.index) {
    return Object.assign({}, todo, {
      completed: true
    })
  }
  return todo
})

// After:
return state.map((todo, index) => {
  if (index === action.index) {
    return { ...todo, completed: true }
  }
  return todo
})
```

이 실험적인 언어 기능은 변경될 수 있음을 알아두세요.

중첩된 상태 객체가 깊게 복사되도록 주의하세요. `_.extend`와 `Object.assign` 모두 상태를 얕게 복사합니다. 중첩된 상태를 어떻게 다룰지에 대한 제안은 [중첩된 객체 업데이트하기](./recipes/structuring-reducers/ImmutableUpdatePatterns.md#updating-nested-objects)에서 볼 수 있습니다.

#### [`dispatch(action)`](api/Store.md#dispatch)를 호출하는걸 잊지 마세요

액션 생산자를 정의했다면, 이걸 호출한다고 자동으로 액션이 디스패치되지 **않습니다**. 예를 들어 이 코드는 아무것도 하지 않습니다:

#### `TodoActions.js`

```js
export function addTodo(text) {
  return { type: 'ADD_TODO', text }
}
```

#### `AddTodo.js`

```js
import React, { Component } from 'react'
import { addTodo } from './TodoActions'

class AddTodo extends Component {
  handleClick() {
    // Won't work!
    addTodo('Fix the issue')
  }

  render() {
    return <button onClick={() => this.handleClick()}>Add</button>
  }
}
```

액션 생산자는 단지 액션을 **반환하는** 함수일 뿐이기 때문에 이 코드는 작동하지 않습니다. 실제로 디스패치하는 것은 당신에게 달렸습니다. 서버에서 랜더링되는 앱의 경우 매 요청마다 별개의 저장소를 요구하기 때문에 액션 생산자를 정의하는 동안 특정 저장소 인스턴스에 바인드 할 수는 없습니다.

[store](api/Store.md) 인스턴스의 [`dispatch()`](api/Store.md#dispatch) 메서드를 호출해서 고칠 수 있습니다:

```js
handleClick() {
  // Works! (but you need to grab store somehow)
  store.dispatch(addTodo('Fix the issue'))
}
```

컴포넌트 계층의 깊은 곳까지 저장소를 전달하는 것은 번거로운 일입니다. [react-redux](https://github.com/gaearon/react-redux)가 `connect` [고차 컴포넌트](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)를 써서 컴포넌트의 props에 `dispatch`를 주입해주는 이유입니다.

수정된 코드는 아래와 같습니다:

#### `AddTodo.js`

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './TodoActions'

class AddTodo extends Component {
  handleClick() {
    // Works!
    this.props.dispatch(addTodo('Fix the issue'))
  }

  render() {
    return <button onClick={() => this.handleClick()}>Add</button>
  }
}

// In addition to the state, `connect` puts `dispatch` in our props.
export default connect()(AddTodo)
```

이제 원한다면 `dispatch`를 다른 컴포넌트로 직접 내려줄 수도 있습니다.

#### mapStateToProps가 정확한지 보세요

액션을 제대로 디스패치했고 리듀서를 잘 적용했지만 그에 대응하는 상태가 props로 제대로 전달되지 않았을 수도 있습니다.

## 다른것이 작동하지 않습니다

**#redux** [Reactiflux](http://reactiflux.com/) Discord 채널에서 물어보거나, [이슈를 생성](https://github.com/reactjs/redux/issues)하세요.
문제를 해결했다면, 같은 문제를 가진 다른 사람들를 위해 [이 문서를 수정](https://github.com/reactjs/redux/edit/master/docs/recipes/Troubleshooting.md)해주세요.
