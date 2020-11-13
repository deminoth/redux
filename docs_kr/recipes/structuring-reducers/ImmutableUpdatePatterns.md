---
id: immutable-update-patterns
title: 불변 업데이트 패턴
description: '리듀서 구조 잡기 > 불변 업데이트 패턴: How to correctly update state immutably, with examples of common mistakes'
hide_title: true
---

# 불변 업데이트 패턴

[사전에 요구되는 개념들#불변객체관리](PrerequisiteConcepts.md#immutable-data-management)에서 소개된 글들은 객체의 필드를 업데이트하거나 배열의 끝에 항목을 추가한다던지하는, 불변객체를 관리하는 기본적인 방법들의 좋은 예를 제공합니다. 하지만 가끔 리듀서가 복잡한 작업을 수행하기 위해 여러 기본적인 것들을 조합해서 사용해야 할 수 있습니다. 여기서는 일반적으로 구현해야 하는 작업의 예를 보여줍니다.

## 중첩된 객체 업데이트하기

중첩된 데이터를 업데이트하기 위한 키는 **_모든_ 중첩의 단계를 적절히 복사하고 업데이트하는 것입니다**. 이것이 리덕스를 학습하는데 있어서 어려운 개념일 수 있지만, 중첩된 객체를 업데이트할 때 빈번히 일어나는 문제입니다. 이는 실수로 직접적인 변경을 일으키므로 피해야 합니다.

##### 일반적인 실수 #1: 같은 객체를 가르키는 새로운 변수

새 변수를 정의하는 것은 실제 객체를 만들지 _않고_. - 같은 객체의 다른 참조를 형성합니다. 이 오류의 예는 다음과 같습니다.

```js
function updateNestedState(state, action) {
  let nestedState = state.nestedState
  // 에러: 존재하는 객체의 참조에 대한 직접적인 변경 - 하지마세요!
  nestedState.nestedField = action.data

  return {
    ...state,
    nestedState
  }
}
```

이 함수는 상태 최상위 객체를 얕은 복사 해서 제대로 반환하지만, `nestedState`변수가 존재하는 객체를 가르키기 때문에 상태가 직접 변경됩니다.

#### 일반적인 실수 #2: 한 단계의 얕은 복사를 만듦

이 오류의 일반적인 버전은 다음과 같습니다.

```js
function updateNestedState(state, action) {
  // 문제: 이는 얕은 복사를 수행합니다!
  let newState = { ...state }

  // 에러: nestedState는 여전히 같은 객체입니다!
  newState.nestedState.nestedField = action.data

  return newState
}
```

최상위의 얕은 복사로는 충분하지 _않습니다_. - `nestedState`객체도 복사해야 합니다.

#### 올바른 접근: 중첩된 모든 단계 복사

불행하게도 깊게 중첩된 상태에 불변객체 업데이트를 적절히 적용하는 단계는 쉽게 번잡해지고 읽기 어려워집니다. 다음은 `state.first.second[someId].fourth`의 업데이트에 대한 예제입니다.

```js
function updateVeryNestedField(state, action) {
    return {
        ....state,
        first : {
            ...state.first,
            second : {
                ...state.first.second,
                [action.someId] : {
                    ...state.first.second[action.someId],
                    fourth : action.someValue
                }
            }
        }
    }
}
```

확실히 중첩된 각 계층은 가독성을 떨어뜨리고 실수하기 쉽습니다. 이는 상태를 가능한 평평하고 조직적으로 유지해야 하는 이유 중 하나입니다.

## 요소를 배열에 추가하고 지우기

보통, 자바스크립트 배열의 내용물은 `push`, `unshift`, `splice`와 같은 가변함수를 사용해서 수정됩니다. 우리는 리듀서에서 상태를 직접 바꾸기를 원하지 않기 때문에, 보통 이를 피해야 합니다. 이러한 이유로 "삽입"이나 "제거"가 다음처럼 작성될 수 있습니다.

```js
function insertItem(array, action) {
  return [
    ...array.slice(0, action.index),
    action.item,
    ...array.slice(action.index)
  ]
}

function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)]
}
```

그러나, *원래 메모리의 참조*는 수정되지 않는다는 것이 중요합니다. **우리가 먼저 복사본을 만드는 한, 안전한 가변 복사를 할 수 있습니다.** 배열과 객에 모두에 적용되지만 중첩된 값도 같은 규칙으로 업데이트돼야 한다는 것에 주의해야 합니다.

이는 다음과 같이 삽입과 제거함수를 작성할 수 있다는 의미입니다.

```js
function insertItem(array, action) {
  let newArray = array.slice()
  newArray.splice(action.index, 0, action.item)
  return newArray
}

function removeItem(array, action) {
  let newArray = array.slice()
  newArray.splice(action.index, 1)
  return newArray
}
```

제거함수는 다음같이도 구현할 수 있습니다.

```js
function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index)
}
```

## 배열의 요소 업데이트하기

배열에서 하나의 항목을 업데이트하는 것은 `Array.map`를 사용해서 우리가 업데이트하길 원하는 요소에 새로운 값을 반환하고 다른 모든 아이템에는 기존 값을 반환함으로써 수행할 수 있습니다:

```js
function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // 이는 관심없는 요소입니다 - 그대로 유지하세요
      return item
    }

    // 그게 아니면, 우리가 원하는것입니다. - 업데이트된 값을 반환하세요
    return {
      ...item,
      ...action.item
    }
  })
}
```

## 불변 업데이트 유틸리티 라이브러리

불변업데이트 코드를 작성하는 것은 지루할 수 있기 때문에, 과정을 추상화하기 위한 많은 유틸리티 라이브러리가 있습니다. 이 라이브러리는 API와 사용법이 다양하지만 어쨌거나 짧고 간결한 방법을 제공하려 합니다. 일부 [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable)과 같은 곳에서는 문자열 경로를 사용합니다.

```js
state = dotProp.set(state, `todos.${index}.complete`, true)
```

그 외에 [immutability-helper](https://github.com/kolodny/immutability-helper)(현재 사용되지 않는 리액트 불변 헬퍼 에드온의 포크) 같은 것은 중첩된 값과 헬퍼 함수를 사용합니다.

```js
var collection = [1, 2, { a: [12, 17, 15] }]
var newCollection = update(collection, {
  2: { a: { $splice: [[1, 1, 13, 14]] } }
})
```

이들은 수동으로 불변 업데이트 로직을 작성하는 것에 대한 유용한 대안을 제공합니다.

많은 불변 업데이트 유틸리티들은 [Immutable Data#Immutable Update Utilities](https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities)의 [Redux Addons Catalog](https://github.com/markerikson/redux-ecosystem-links)섹션에서 찾을 수 있습니다.
