---
id: getting-started
title: Redux 시작하기
description: '소개 > 시작하기: Redux를 배우고 사용하기 위한 리소스'
hide_title: true
---

# Redux 시작하기

Redux는 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너입니다.

Redux는 여러분이 일관적으로 동작하고, 서로 다른 환경(서버, 클라이언트, 네이티브)에서 작동하고, 테스트하기 쉬운 앱을 작성하도록 도와줍니다. 여기에 더해서 [시간여행형 디버거와 결합된 실시간 코드 수정](https://github.com/reduxjs/redux-devtools)과 같은 훌륭한 개발자 경험을 제공합니다.

여러분은 Redux를 [React](https://reactjs.org)나 다른 뷰 라이브러리와 함께 사용할 수 있습니다. Redux는 매우 작지만(의존 라이브러리 포함 2kB), 사용 가능한 애드온은 매우 많습니다.

## 설치

### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org)은 Redux 로직을 작성하기 위해 저희가 공식적으로 추천하는 방법입니다. RTK는 Redux 앱을 만들기에 필수적이라 생각한 패키지와 함수들을 포함하고 있습니다. 대부분의 Redux 작업을 단순화하고, 흔한 실수를 방지하며, Redux 앱을 만들기 쉽게 해주는 모범 사례를 통해 만들어졌습니다.

RTK는 [저장소 준비](https://redux-toolkit.js.org/api/configureStore),
[리듀서 생산과 불변 수정 로직 작성](https://redux-toolkit.js.org/api/createreducer),
[상태 "조각" 전부를 한번에 작성](https://redux-toolkit.js.org/api/createslice) 등 일반적인 작업들을 단순화해주는 유틸리티를 포함하고 있습니다.

여러분이 첫 프로젝트에 Redux를 새로 도입하는 신참이든 기존 앱을 단순화하고 싶은 경험자든 상관 없이,
**[Redux Toolkit](https://redux-toolkit.js.org/)**은 더 나은 Redux 코드를 만들게
도와줍니다.

Redux Toolkit은 NPM에서 패키지로 받아 모듈 번들러나 Node 앱에서 사용 가능합니다.

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

### React Redux 앱 만들기

React와 Redux로 새 앱을 만들기 위해 추천하는 방법은 [Create React App](https://github.com/facebook/create-react-app)를 위한 [공식 Redux+JS 템플릿](https://github.com/reduxjs/cra-template-redux)을 사용하는 것입니다. 이를 통해 **[Redux Toolkit](https://redux-toolkit.js.org/)**와 React Redux가 React 컴포넌트와 통합되는 이점을 누릴 수 있습니다.

```sh
npx create-react-app my-app --template redux
```

### Redux 코어

Redux 코어 라이브러리는 NPM에서 패키지로 받아 모듈 번들러나 Node 앱에서 사용 가능합니다.

```bash
# NPM
npm install redux

# Yarn
yarn add redux
```

`window.Redux` 전역변수를 선언해주는 UMD 패키지도 사용 가능합니다. UMD 패키지는 [`<script>` 태그](https://unpkg.com/redux/dist/redux.js)로 바로 사용 가능합니다.

자세한 사항은 [설치](Installation.md) 페이지를 보세요.

## 기본 예제

여러분의 앱의 전역 상태 전부는 하나의 저장소(_store_)안에 있는 객체 트리에 저장됩니다.
상태 트리를 변경하는 유일한 방법은 무엇이 일어날지 서술하는 객체인 액션(_action_)을 만들어서 저장소로 보내는(_dispatch_) 것 뿐입니다.
상태가 액션에 의해 어떻게 바뀔지 명시하기 위해, 여러분은 이전 상태와 액션으로부터 새 상태를 계산하는 순수 함수인 리듀서(_reducers_)를 작성해야 합니다.

```js
import { createStore } from 'redux'

/**
 * 이것이 현재 상태와 "무엇이 일어날지" 서술하는 액션 객체를 받아
 * 새 상태값을 반환하는 함수인 리듀서입니다.
 * 리듀서의 함수 시그니처는 (state, action) => newState 입니다.
 *
 * Redux의 상태는 일반적인 JS 객체, 배열, 기본형(primitive)만을 포함해야 합니다.
 * 객체의 최상위 값은 보통 객체입니다. 이 상태 객체를 변경해서는
 * 안되며, 상태가 바뀌면 새 객체를 반환해야 한다는 점이 중요합니다.
 *
 * 리듀서 내에서는 어떤 조건문도 사용할 수 있습니다. 이 예제에서는
 * switch 구문을 사용하겠습니다.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// 앱의 상태를 보관하는 Redux 저장소를 만듭니다.
// API로는 { subscribe, dispatch, getState }가 있습니다.
let store = createStore(counterReducer)

// subscribe()를 이용해 상태 변화에 따라 UI가 변경되게 할 수 있습니다.
// 보통은 subscribe()를 직접 사용하기보다는 뷰 바인딩 라이브러리(예를 들어 React Redux)를
// 사용합니다. 구독을 사용하면 도움이 되는 경우도 있습니다.

store.subscribe(() => console.log(store.getState())))

// 내부 상태를 변경하는 유일한 방법은 액션을 보내는 것뿐입니다.
// 액션은 직렬화할수도, 로깅할수도, 저장할수도 있으며 나중에 재실행할수도 있습니다.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```

상태를 바로 변경하는 대신, **액션**이라 불리는 평범한 객체를 통해 일어날 변경을 명시합니다. 그리고 각각의 액션이 전체 애플리케이션의 상태를 어떻게 변경할지 결정하는 특별한 함수인 **리듀서**를 작성합니다.

보통의 Redux 앱에는 하나의 루트 리듀서 함수를 가진 단 하나의 저장소가 있습니다. 앱이 커짐에 따라 루트 리듀서를 상태 트리의 서로 다른 부분에서 개별적으로 동작하는 작은 리듀서들로 나눌 수 있습니다. React 앱을 하나의 루트 컴포넌트에서 시작해서 여러 작은 컴포넌트의 조합으로 바꾸는 것과 동일합니다.

이런 아키텍처가 카운터 앱에서는 너무 과한 것처럼 보이지만, 크고 복잡한 앱에서는 이 패턴의 확장성이 잘 드러납니다. 액션에 따른 모든 변경을 추적할 수 있기 때문에, 매우 강력한 개발자 도구를 가능하게 해주기도 합니다. 여러분은 사용자 세션을 기록한 다음 액션 하나하나를 다시 실행해 볼 수 있습니다.

### Redux Toolkit 예제

Redux Toolkit은 Redux 로직을 작성하고 저장소를 만드는 일을 단순하게 만들어줍니다. Redux Toolkit을 이용하면 같은 로직이 아래와 같이 됩니다:

```js
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit은 리듀서 내에서 "변경"을 할 수 있게 해줍니다.
      // "상태 초안"의 변화를 감지해서 새 불변 상태를 만들어주는
      // Immer 라이브러리를 사용하기 때문에, 실제로는 변경이
      // 일어나지 않습니다.
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// 저장소 구독은 여전히 가능합니다
store.subscribe(() => console.log(store.getState()))

// 여전히 `dispatch`에 액션 객체를 넘겨야 하지만, 여러분을 위해 준비되어 있습니다.
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
```

Redux Toolkit은 Redux의 동작과 데이터 흐름을 여전히 따르지만 읽기 쉬운 로직을 더 짧게 쓸 수 있도록 해줍니다.

## Redux 배우기

Redux를 배우는 데 도움이 될 다양한 자료가 있습니다.

### Redux 필수 강좌

[**Redux 필수 강좌**](../tutorials/essentials/part-1-overview-concepts.md)는 저희가 추천하는 API를 이용해 Redux를 올바르게 사용하는 방법을 큰 그림부터 자세한 부분까지 알려드립니다. 여기서부터 시작하는 것을 권장합니다.

### Redux 핵심 강좌

[**Redux 핵심 강좌**](../tutorials/fundamentals/part-1-overview.md)는 "Redux가 어떻게 작동하는지"를 첫번째 원칙부터, 추상적인 설명 없이, 왜 일반적인 Redux 패턴이 존재하는지 세부적인 부분부터 가르쳐 드립니다.


### 추가 강좌

- Redux 레포지터리는 Redux를 어떻게 사용하는지에 대해 다양한 면을 보여주는 예제들을 포함하고 있습니다. 거의 모든 예제들에 온라인에서 실행해 볼 수 있는 CodeSandbox가 들어 있습니다. 전체 목록은 **[예제 페이지](./Examples.md)**에서 확인하세요.
- Redux 제작자 Dan Abramov의 **무료 ["Getting Started with Redux" 비디오 시리즈](https://egghead.io/series/getting-started-with-redux)**와 Egghead.io 비디오 코스인 **[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)**
- Redux 메인테이너 Mark Erikson의 **["Redux Fundamentals" 컨퍼런스 발표](http://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/)**와 [**"Redux Fundamentals" 워크샵 슬라이드**](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/)
- Dave Ceddia의 포스팅 [**A Complete React Redux Tutorial for Beginners**](https://daveceddia.com/redux-tutorial/)

### 다른 자료들

- **[Redux FAQ](../FAQ.md)**는 Redux를 어떻게 써야 하는지에 대한 일반적인 질문들에 답해주고, **["Recipes" 문서](../recipes/README.md)**에는 파생된 데이터, 테스트, 리듀서 로직 구성, 보일러플레이트 줄이기 등에 대한 정보가 있습니다.
- Redux 메인테이너 Mark Erikson의 **["Practical Redux" 강좌 시리즈](http://blog.isquaredsoftware.com/series/practical-redux/)**는 실전에서 React와 Redux를 사용하기 위한 중상급 테크닉들을 보여줍니다 (**[an interactive course on Educative.io](https://www.educative.io/collection/5687753853370368/5707702298738688)**에서도 이용할 수 있습니다).
- **[React/Redux links list](https://github.com/markerikson/react-redux-links)**에는 [리듀서와 셀렉터](https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md), [부수효과 관리하기](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md), [Redux 아키텍처와 모범 사례](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md)등의 정리된 글들이 있습니다.
- 커뮤니티에서 수천가지의 Redux 관련 라이브러리, 애드온, 도구들을 만들었습니다. **["생태계" 문서](./Ecosystem.md)**에 저희의 추천 목록이 있습니다. 전체 목록은 **[Redux addons catalog](https://github.com/markerikson/redux-ecosystem-links)**에서 보실 수 있습니다.

## 도움과 논의

**[Reactiflux Discord 커뮤니티](http://www.reactiflux.com)**의 **[#redux 채널](https://discord.gg/reactiflux)**은 Redux를 배우고 사용하는데 관련된 질문을 위한 저희의 공식 채널입니다. Reactiflux는 질문을 하고 배우며 시간을 보낼만한 멋진 곳입니다 - 저희와 함께하세요!

[Stack Overflow](https://stackoverflow.com)에 **[#redux 태그](https://stackoverflow.com/questions/tagged/redux)**를 사용해 질문할수도 있습니다.

버그 리포트나 다른 피드백을 남기고 싶다면, [Github 레포에 이슈를 남겨주세요](https://github.com/reduxjs/redux).

## Redux를 사용해야 할까요?

Redux는 상태를 관리하기에 좋은 도구이지만 여러분의 상황에 적당한지는 따져 보아야 합니다. **단지 누군가가 사용하라고 했다는 이유만으로 Redux를 사용하지는 마세요 - 시간을 들여서 잠재적인 이점과 그에 따르는 단점을 이해하세요.**

Redux를 사용하기 적절한 때를 알기 위한 몇 가지 제안이 있습니다:

- 계속해서 바뀌는 상당한 양의 데이터가 있다
- 상태를 위한 단 하나의 근원이 필요하다
- 최상위 컴포넌트가 모든 상태를 가지고 있는 것은 더 이상 적절하지 않다

> **Redux가 어떻게 사용되어야 하는지에 대한 여러 생각들을 보려면:**
>
> - **[Redux FAQ: When should I use Redux?](../faq/General.md#when-should-i-use-redux)**
> - **[당신에게 Redux는 필요 없을지도 모릅니다.](https://medium.com/@Dev_Bono/당신에게-redux는-필요-없을지도-모릅니다-b88dcd175754)**
>
> - **[The Tao of Redux, Part 1 - Implementation and Intent](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
>
> - **[The Tao of Redux, Part 2 - Practice and Philosophy](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)**
> - **[Redux FAQ](../FAQ.md)**
