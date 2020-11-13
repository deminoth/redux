---
id: prior-art
title: 기존 기술
description: '소개 > 기존 기술: Redux의 디자인에 끼친 영향'
hide_title: true
---

# 기존 기술

Redux는 기존 기술의 복합적인 유산입니다. Redux를 기존 기술과 비교해보면 일부 패턴이나 기술적인 면에서 비슷한 점을 가지고 있습니다. 하지만 중요한 차이점도 있습니다. 이 절에서는 이러한 유사성과 차이점에 대해서 설명합니다.

### Flux

Redux를 [Flux](https://facebook.github.io/flux/)의 구현 중 하나라고 생각할 수 있을까요? [그렇기도 하고](https://twitter.com/fisherwebdev/status/616278911886884864), [아니기도 합니다](https://twitter.com/andrestaltz/status/616270755605708800).

(단지 궁금한 게 그거라면 걱정하지 마세요. [Flux를 만든 개발자도](https://twitter.com/jingc/status/616608251463909376) [Redux를 좋아합니다](https://twitter.com/fisherwebdev/status/616286955693682688))

Redux는 Flux의 중요한 특징들로부터 영감을 얻었습니다. Flux와 마찬가지로 Redux에서는 애플리케이션의 특정 계층에 있을 모델 업데이트 로직에 집중할 수 있도록 해줍니다(Flux의 '저장소', Redux의 '리듀서'). 저장소나 리듀서는 애플리케이션 코드가 직접 데이터를 조작하는 대신 액션이라고 불리는 평범한 객체로만 모든 데이터 변화를 묘사하도록 강제합니다.

Flux와 달리 **Redux에는 디스패처라는 개념이 존재하지 않습니다**. 이는 Redux가 이벤트 에미터보다 순수 함수들에 의존하고 있기 때문입니다. 그리고 순수 함수는 이것들을 관리하는 추가적인 엔티티 없이도 조합하기 쉽습니다. Flux를 어떻게 보느냐에 따라서 이를 상세 구현 방법의 하나라고 생각할 수도 있습니다. Flux는 [`(state, action) => state`](https://speakerdeck.com/jmorrell/jsconf-uy-flux-those-who-forget-the-past-dot-dot-dot) 형식으로 묘사되곤 합니다. 따라서 Redux 역시 Flux 아키텍처라고 이야기할 수 있지만, 순수 함수를 통해 이를 더 간단하게 만듭니다.

Flux와 또 다른 중요한 차이점은 **Redux는 당신이 결코 데이터의 상태를 바꾸지 않는다고 가정한다는 점입니다**. 상태는 평범한 객체나 배열이면 충분히 다룰 수 있지만 리듀서에서 상태를 변경하지 않는 것을 강력히 권장합니다. 리듀서에서는 항상 새로운 객체를 반환해야합니다. 이를 위해 [Babel](http://babeljs.io)에 구현되어있는 [ES7에서 제안된 object spread 문법](https://github.com/sebmarkbage/ecmascript-rest-spread)이나 [Immutable](https://facebook.github.io/immutable-js)을 사용할 수 있습니다.

성능이나 다른 이유 때문에 위해 [순수하지 않은 리듀서를 작성하는 것도](https://github.com/rackt/redux/issues/328#issuecomment-125035516) 기술적으로는 _가능하지만_, 이렇게 하지 않을 것을 권장합니다. 순수하지 않은 리듀서 구현은 시간 여행, 기록/재생, 핫 로딩과 같은 개발 지원 기능을 망가뜨립니다. 더욱이 불변성 때문에 대부분의 실제 애플리케이션에서 성능 문제가 있을 것 같아보이지만, [Om](https://github.com/omcljs/om)이 증명했듯이 객체 할당에 있어서 성능에서 불리할 지라도 순수 함수를 통해 무엇이 바뀌었는지 정확히 판단할 수 있기 때문에 재렌더링이나 재계산 같은 값비싼 연산을 피한다는 점에서는 여전히 유리합니다.

### Elm

[Elm](http://elm-lang.org/)은 [Evan Czaplicki](https://twitter.com/czaplic)이 Haskell에서 영감을 받아 만든 함수형 프로그래밍 언어입니다. Elm은 업데이트가 `(state, action) => state` 시그니처를 따르도록 하는 [“모델 뷰 업데이트” 아키텍처](https://github.com/evancz/elm-architecture-tutorial/)을 강제합니다. 엄밀히 말해 Elm의 업데이터(updater)와 Redux의 리듀서(reducer)는 같습니다.

하지만 Redux와 달리 Elm은 언어입니다. 따라서 강제된 순수성, 정적 타입, 뛰어난 불변성과 (`case` 표현식을 활용한) 패턴 매칭 등 다양한 장점을 누릴 수 있습니다. Elm을 사용할 계획이 없더라도 Elm의 아키텍처를 공부하거나 가지고 놀아보기를 권합니다. [비슷한 아이디어를 구현해둔 흥미로운 자바스크립트 라이브러리 플레이그라운드](https://github.com/paldepind/noname-functional-frontend-framework)도 있습니다. Redux가 어디서 영감을 받았는 지 찾을 수 있습니다. Elm의 정적 타입에 가까워질 수 있는 한 가지 방법은 [Flow와 같은 점진적인 타입(gradual typing) 솔루션](https://github.com/rackt/redux/issues/290)을 사용하는 것입니다.

### Immutable

[Immutable](https://facebook.github.io/immutable-js)은 영속 데이터 구조를 구현한 자바스크립트 라이브러리입니다. 이는 성능도 괜찮을 뿐만 아니라 자바스크립트 API와도 잘 어울립니다.

Immutable이나 유사 라이브러리들은 Redux와도 문제없이 잘 어울립니다. 부담없이 함께 사용하세요!

**Redux는 애플리케이션에서 _어떻게_ 상태를 저장할 지에 대해서 신경쓰지 않습니다. 평범한 객체, 불변 객체, 그 외의 무엇이라도 상관하지 않습니다.** 범용적인 애플리케이션 작성을 위해 (디)시리얼라이제이션 매커니즘이나 서버에서 상태를 가져와 수화하는(hydrating, 기존 객체에 값을 채우는 것을 의미함.) 기능을 원할 수도 있는데, _불변성을 지원하기만 한다면_ 어떤 데이터 스토리지 라이브러리를 사용해도 무방합니다. 예를 들어 Redux 상태를 관리하기 위해 Backbone을 사용하는 것은 어울리지 않습니다. 왜냐면 Backbone 모델은 가변적이기 때문입니다.

사용하고자 하는 불변 라이브러리에서 커서(cursor)를 지원하더라도 이를 사용해서는 안 됩니다. 전체 상태 트리는 읽기 전용으로 다뤄져야 하며, Redux로 상태를 업데이트하고 업데이트를 구독해야합니다. 따라서 커서를 사용하는 것은 Redux와는 어울리지 않습니다. **커서를 오직 상태 트리와 UI 트리를 분리하거나 점진적으로 커서를 한정짓는(refine) 경우에만 사용하더라도, 커서 대신에 셀렉터를 검토해보아야합니다.** 셀렉터는 조합 가능한 getter 함수들입니다. 조합 가능한 훌륭하며 간결한 셀렉터를 제공하는 [reselect](http://github.com/faassen/reselect)를 살펴보기 바랍니다.

### Baobab

[Baobab](https://github.com/Yomguithereal/baobab)은 플레인 자바스크립트 객체를 업데이트하기 위해 불변(immutable) API를 구현한 또 다른 유명한 라이브러리입니다. 하지만 Redux와 함께 사용해서 누릴 수 있는 이점은 크지 않습니다.

Baobab에서 제공하는 대부분의 기능은 커서를 사용해 데이터를 업데이트하는 일이므로, 액션을 디스패치하는 것이 데이터를 변경하는 유일한 방법인 Redux와는 어울리지 않습니다. 따라서 Baobab은 다른 방법으로 이 문제를 해결하지만, 이들은 서로 보완적이지 않습니다.

Immutable과 달리 Baobab은 내부적으로 어떤 특별하고 효율적인 데이터 구조를 구현하지는 않습니다. 따라서 Redux와 Baobab을 함께 사용해도 큰 장점은 없습니다. 평범한 객체를 사용하는 편이 더 쉽습니다.

### Rx

[Reactive Extensions](https://github.com/Reactive-Extensions/RxJS) (그리고 [현대적으로 재작성하고 있는 RxJS](https://github.com/ReactiveX/RxJS))는 비동기 애플리케이션의 복잡도를 제어하는 아주 뛰어난 방법입니다. 실제로 [독립적인 observables로서 사람과 컴퓨터가 인터렉션하는 모델을 구현하는 라이브러리를 만드려는 노력도 있습니다.](http://cycle.js.org).

Redux와 Rx를 함께 사용하는 게 합리적일까요? 물론입니다! Redux와 Rx는 아주 잘 어울립니다. 예를 들어 Redux 저장소를 observable로 사용하는 것은 아주 쉽습니다.

```js
function toObservable(store) {
  return {
    subscribe({ onNext }) {
      let dispose = store.subscribe(() => onNext(store.getState()))
      onNext(store.getState())
      return { dispose }
    }
  }
}
```

마찬가지로 서로 다른 비동기 스트림을 조합해서 `store.dispatch()`에서 사용하기 전에 액션에서 사용할 수도 있습니다.

그럼 이렇게 질문할 수도 있습니다. 이미 Rx를 잘 사용하는 데 Redux가 필요할까요? 꼭 그렇지는 않습니다. [Rx 안에서 Redux를 재구현](https://github.com/jas-chen/rx-redux)하는 것은 그리 어렵지 않습니다. Rx의 `.scan()` 메서드를 활용해 두 줄이면 충분하다고도 합니다. 정말로 그렇습니다.

의심스럽다면 더 멀리 갈 필요도 없이 Redux 소스코드와 생태계(예를 들어, [개발자 도구](https://github.com/gaearon/redux-devtools))를 살펴보기 바랍니다. 이에 대해 크게 신경쓰지 않지만 리엑티브 데이터 흐름을 사용하고 싶다면 [Cycle](http://cycle.js.org)을 검토하거나 Redux와 함께 사용해보기 바랍니다. 어떤 지 알려주세요!
