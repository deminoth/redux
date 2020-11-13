---
id: faq
title: FAQ 목차
hide_title: true
---

# Redux FAQ

## 목차

- **일반**
  - [Redux를 언제 배워야 할까요?](faq/General.md#when-should-i-learn-redux)
  - [Redux를 언제 써야 할까요?](faq/General.md#when-should-i-use-redux)
  - [Redux는 React에만 사용할 수 있나요?](faq/General.md#can-redux-only-be-used-with-react)
  - [Redux를 사용하기 위해 특정한 빌드 도구를 사용해야 하나요?Do I need to have a particular build tool to use Redux?](faq/General.md#do-i-need-to-have-a-particular-build-tool-to-use-redux)
- **리듀서**
  - [두 리듀서의 상태를 공유하는 방법은? CombineReducers를 사용해야 하나요?](faq/Reducers.md#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers)
  - [액션을 다루기 위해 switch 구문을 사용해야 하나요?](faq/Reducers.md#do-i-have-to-use-the-switch-statement-to-handle-actions)
- **상태 조직하기**
  - [상태 전부를 Redux에 넣어야 하나요? React의 setState()를 사용해도 되나요?](faq/OrganizingState.md#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate)
  - [함수나 Promise 같은 직렬화 할 수 없는 것들을 상태 저장소에 넣어도 되나요?](faq/OrganizingState.md#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
  - [중첩되거나 중복된 값을 상태에 넣어도 되나요?](faq/OrganizingState.md#how-do-i-organize-nested-or-duplicate-data-in-my-state)
  - [폼이나 다른 UI 상태를 저장소에 넣어도 되나요?](faq/OrganizingState.md#should-i-put-form-state-or-other-ui-state-in-my-store)
- **저장소 준비**
  - [저장소를 여럿 만들어도 되나요? 저장소를 바로 임포트해서 컴포넌트 안에서 사용해도 되나요?](faq/StoreSetup.md#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself)
  - [저장소 인핸서에 하나 이상의 미들웨어가 있어도 괜찮은가요? 미들웨어 함수 내에서 next와 dispatch의 차이가 무엇인가요?](faq/StoreSetup.md#is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function)
  - [어떻게 상태의 일부만 구독하나요? 디스패치된 액션을 구독과 함께 가져올 수 있나요?](faq/StoreSetup.md#how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription)
- **액션**
  - [액션 타입은 왜 문자열이거나 직렬화 할 수 있어야 하나요? 왜 액션 타입은 상수여야 하나요?](faq/Actions.md#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)
  - [리듀서와 액션은 항상 일대일로 대응하나요?](faq/Actions.md#is-there-always-a-one-to-one-mapping-between-reducers-and-actions)
  - [AJAX 호출과 같은 "부수 작용"을 어떻게 나타내나요? 비동기 동작을 위해 "액션 생산자", "썽크", "미들웨어" 같은 것들이 필요한 이유가 뭔가요?](faq/Actions.md#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior)
  - [어느 비동기 미들웨어를 사용해야 할까요? 썽크, 사가, 옵저버블이나 다른 미들웨어 중에서 어떻게 골라야 하나요?](faq/Actions.md#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else)
  - [액션 생산자 하나에서 여러 액션을 연이어 디스패치해도 되나요?](faq/Actions.md#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator)
- **불변 데이터**
  - [불변성이 가진 이점은 무엇인가요?](faq/ImmutableData.md#what-are-the-benefits-of-immutability)
  - [Redux에서 불변성이 강제되는 이유는 무엇인가요?](faq/ImmutableData.md#why-is-immutability-required-by-redux)
  - [데이터 불변성을 다루는 방법으로는 어떤 것이 있나요? Immutable.JS를 사용해야 하나요?](faq/ImmutableData.md#what-approaches-are-there-for-handling-data-immutability-do-i-have-to-use-immutable-js)
  - [불변 작업을 위해 자바스크립트를 사용하는데 무슨 문제가 있나요?](faq/ImmutableData.md#what-are-the-issues-with-using-plain-javascript-for-immutable-operations)
- **Redux에서 Immutable.JS 사용하기**
  - [왜 Immutable.JS 같은 불변성을 위한 라이브러리를 사용해야 하나요?](recipes/UsingImmutableJS.md#why-should-i-use-an-immutable-focused-library-such-as-immutable-js)
  - [왜 불변성을 위한 라이브러리로 Immutable.JS를 선택해야 하나요?](recipes/UsingImmutableJS.md#why-should-i-choose-immutable-js-as-an-immutable-library)
  - [Immutable.JS를 사용하는데 있어서 문제점은 무엇인가요?](recipes/UsingImmutableJS.md#what-are-the-issues-with-using-immutable-js)
  - [Immutable.JS에 수고를 들일 가치가 있나요?](recipes/UsingImmutableJS.md#is-using-immutable-js-worth-the-effort)
  - [Redux에서 Immutable.JS를 사용하는데 있어서 모범 사례가 있을까요?](recipes/UsingImmutableJS.md#what-are-some-opinionated-best-practices-for-using-immutable-js-with-redux)
- **코드 구조**
  - [파일 구조를 어떤 식으로 구성해야 하나요? 액션 생산자와 리듀서를 어떻게 묶어야 하나요? 셀렉터는 어디에 둬야 하나요?](faq/CodeStructure.md#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)
  - [리듀서와 액션 생산자 사이에서 로직을 어떻게 나눠야 하나요? "비즈니스 로직"은 어디에 둬야 하나요?](faq/CodeStructure.md#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go)
  - [왜 액션 생산자를 사용해야 하나요?](faq/CodeStructure.md#why-should-i-use-action-creators)
  - [웹소켓 같은 영속적인 연결은 어디에 둬야 하나요?](faq/CodeStructure.md#where-should-websockets-and-other-persistent-connections-live)
- **성능**
  - [Redux는 성능이나 아키텍처 관점에서 얼마나 잘 "확장" 할 수 있나요?](faq/Performance.md#how-well-does-redux-scale-in-terms-of-performance-and-architecture)
  - [액션마다 "모든 리듀서"들을 호출하면 느려지지 않나요?](faq/Performance.md#wont-calling-all-my-reducers-for-each-action-be-slow)
  - [리듀서에서 상태를 깊이 복사해야 하나요? 상태를 복사하다가 느려지지는 않을까요?](faq/Performance.md#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow)
  - [저장소가 업데이트되는 횟수를 줄이려면 어떻게 해야 하나요?](faq/Performance.md#how-can-i-reduce-the-number-of-store-update-events)
  - ["하나의 상태 트리"를 가지면 메모리 문제가 생기지 않나요? 액션을 많이 디스패치하면 메모리를 차지하지 않나요?](faq/Performance.md#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory)
  - [원격 데이터를 캐시하면 메모리 문제가 생기지 않나요?](faq/Performance.md#will-caching-remote-data-cause-memory-problems)
- **디자인 결정**
  - [Redux는 왜 구독자들에게 상태와 액션을 전달하지 않나요?](faq/DesignDecisions.md#why-doesnt-redux-pass-the-state-and-action-to-subscribers)
  - [왜 Redux는 액션과 리듀서에서 클래스를 지원하지 않나요?](faq/DesignDecisions.md#why-doesnt-redux-support-using-classes-for-actions-and-reducers)
  - [미들웨어의 시그니처는 왜 커링을 사용하나요?](faq/DesignDecisions.md#why-does-the-middleware-signature-use-currying)
  - [왜 applyMiddleware는 디스패치를 위해 클로저를 사용하나요?](faq/DesignDecisions.md#why-does-applymiddleware-use-a-closure-for-dispatch)
  - [왜 `combineReducers`는 각 리듀서를 호출할 때 세 번째 인자로 전체 상태를 포함하지 않나요?](faq/DesignDecisions.md#why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer)
  - [왜 mapDispatchToProps에서 `getState()`이나 `mapStateToProps()`의 리턴값을 사용할 수 없나요?](faq/DesignDecisions.md#why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops)
- **React Redux**
  - [왜 React-Redux를 사용해야 하나요?](faq/ReactRedux.md#why-should-i-use-react-redux)
  - [왜 내 컴포넌트가 다시 랜더링되지 않나요? 왜 내 mapStateToProps가 작동하지 않나요?](faq/ReactRedux.md#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running)
  - [왜 컴포넌트가 너무 자주 다시 랜더링되나요?](faq/ReactRedux.md#why-is-my-component-re-rendering-too-often)
  - [mapStateToProps 속도를 더 빠르게 할 수는 없나요?](faq/ReactRedux.md#how-can-i-speed-up-my-mapstatetoprops)
  - [연결된 컴포넌트에서 this.props.dispatch를 사용할 수 없는 이유가 뭔가요?](faq/ReactRedux.md#why-dont-i-have-this-props-dispatch-available-in-my-connected-component)
  - [최상단 컴포넌트만 연결해야 하나요? 아니면 트리 내에서 여러 컴포넌트를 연결해도 되나요?](faq/ReactRedux.md#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree)
- **기타**
  - [더 대규모의 "진짜" Redux 프로젝트가 있나요?](faq/Miscellaneous.md#are-there-any-larger-real-redux-projects)
  - [Redux에서 인증은 어떻게 구현하나요?](faq/Miscellaneous.md#how-can-i-implement-authentication-in-redux)
