---
id: structuring-reducers
title: 리듀서 구조 잡기
description: '리듀서 구조 잡기 > Intro: overview and contents'
hide_title: true
---

# 리듀서 구조 잡기

핵심적으로 리덕스는 매우 간단한 디자인 패턴입니다. 당신의 모든 "작성" 로직은 하나의 함수로 귀결됩니다. 그리고 그 로직을 실행할 수 있는 유일한 방법은 리덕스에게 어떤 일이 일어난다는 것을 표현하는 일반 객체를 넘겨주는 것입니다. 리덕스 저장소는 작성로직을 호출, 현재의 상태트리와 설명객체를 전달하고 작성 로직 함수는 새로운 상태 트리를 반환합니다. 그리고 리덕스 저장소는 구독자(subscribers)에게 상태가 바뀌었음을 알립니다.

리덕스는 작성 로직 함수의 동작에 대해 몇 가지 제약을 둡니다. ["Redux 핵심" Part 3: 상태, 액션, 리듀서](../../tutorials/fundamentals/part-3-state-actions-reducers.md)에서 설명한 것처럼 리듀서 함수는 `(previousState, action) => newState`의 형태를 가지고, 순수함수이며 예측 가능해야 합니다.

더욱이 기본적인 형태만 맞춘다면 리덕스는 리듀서 함수가 어떤 로직을 구성하는지는 신경쓰지 않습니다. 이는 자유의 근원이자 혼란의 근원이 됩니다. 하지만 리듀서를 작성하는데 널리 사용되는 패턴 뿐만아니라 관련된 많은 주제와 개념들을 알고 있어야 합니다. 애플리케이션의 크기가 커지면서 이 패턴은 리듀서 코드의 복잡성과 실제 데이터, UI 성능 최적화에 결정적인 역할을 합니다.

### 리듀서 작성을 위해 알아야 할 개념

개념중 일부는 이곳 어딘가에서 이미 설명했습니다. 어떤 것들은 리덕스외에도 일반적으로 사용되고 응용될 수 있으며 이를 자세히 다루고 있는 수많은 글들이 존재합니다.

리덕스의 더 깊은 부분과 특유의 테크닉을 보기전에 이런 개념들을 철저히 익히는 것은 필수적입니다. 다음은 읽기보기를 추천하는 목록입니다:

#### [사전에 요구되는 개념들](PrerequisiteConcepts.md)

이것들이 애플리케이션의 아키텍처 결정에 직접 사용될 수도 있고 그렇지 않을 수도 있다는 것에 주의해야 합니다. 예를 들어 데이터를 저장하는데 Immutable.js Maps를 사용하는 것은 일반적인 자바스크립트 객체를 사용하는 것과는 차이가 있을겁니다. 여기서 설명하는 이론들은 일반적인 자바스크립트 객체를 사용한다고 가정하지만, 다른 것들을 사용하더라도 적용됩니다.

### 리듀서 개념과 테크닉

- [기본 리듀서 구조](BasicReducerStructure.md)
- [리듀서 로직 분리하기](SplittingReducerLogic.md)
- [리듀서 로직 리팩토링하기](RefactoringReducersExample.md)
- [`combineReducers`사용하기](UsingCombineReducers.md)
- [`combineReducers`더 알아보기](BeyondCombineReducers.md)
- [상태 정규화하기](NormalizingStateShape.md)
- [정규화된 데이터 업데이트하기](UpdatingNormalizedData.md)
- [리듀서 로직 재사용하기](ReusingReducerLogic.md)
- [뷸변 업데이트 패턴](ImmutableUpdatePatterns.md)
- [상태 초기화하기](InitializingState.md)
