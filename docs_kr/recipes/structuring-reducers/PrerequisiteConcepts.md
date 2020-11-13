---
id: prerequisite-concepts
title: 사전에 요구되는 개념들
description: '리듀서 구조 잡기 > 사전에 요구되는 개념들: Key concepts to understand when using Redux'
hide_title: true
---

# 사전에 요구되는 개념들

["Redux 핵심" Part 3: 상태, 액션, 리듀서](../../tutorials/fundamentals/part-3-state-actions-reducers.md)에서 설명한 것처럼 리덕스의 리듀서는 함수입니다:

- `(previousState, action) => newState`의 꼴로 작성되어야 합니다. [`Array.prototype.reduce(reducer, ?initialValue)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)에 전달되는 함수 타입과 비슷합니다.
- "순수"해야 합니다. 리듀서에서 이것의 의미는:
  - _사이드이펙트_(API를 호출하거나 지역객체, 지역변수가 아닌 것을 수정하는 등)가 생기면 안됩니다.
  - *순수하지 않은 함수(Date.now 혹은 Math.random와 같은)를 호출*하면 안됩니다.
  - 인수를 *변경*하면 안 됩니다. 리듀서가 상태를 변화시킬 때 **이미 존재하는** 상태 객체를 *수정*하면 안됩니다. 그 대신 변화에 필요한 **새로운** 객체를 만들어야 합니다. 리듀서가 업데이트하는 상태 내의 모든 객체에 동일한 접근이 필요합니다.

> #### 불변성, 사이드이펙트, 변화에 대한 주의
>
> 변경은 시간 단위 디버깅과 리덕스의 `connect`함수를 방해하기 때문에 권장되지 않습니다:
>
> - 시간 단위로 디버깅할때 리덕스 DevTools는 기록 된 액션들에게 상태 값만 만드는 것을 기대합니다. **변화나 비동기액션같은 사이드이펙트는 시간단위 디버깅에서 각 단계 간의 동작을 변화시켜 애플리케이션을 중단시킵니다.**
> - 리액트 리덕스에서 `connect`는 컴포넌트가 업데이트되어야 하는지 확인하기 위해 `mapStateToProps`함수로 부터 반환된 props를 확인합니다. 성능의 향상을 위해서 `connect`는 불변성에 기인한 더 쉬운 방법을 취하며 객체가 동일한지 확인하기 위해 얕은 참조 검사를 사용합니다. **즉, 직접 객체를 변화시킨 것은 감지하지 못하며, 다시 렌더링 되지 않습니다.**
>
> 그 외 리듀서에서 유니크한 ID나 타임스탬프와 같은 것들을 생성하는 것은 코드를 예측할 수 없게 하고 디버그, 테스트를 어렵게 합니다.

이런 규칙들 때문에 리덕스 리듀서의 다른 개념들을 익히기 전에 아래의 중요한 개념들을 익히는 것이 중요합니다.

### 리덕스 리듀서 기초

**핵심 개념**:

- 상태와 상태의 형태 관점으로 생각하기
- 상태 조각에 의한 업데이트 책임 위임(_리듀서 구성_)
- 고차 리듀서
- 초기 상태 리듀서 정의

**읽어볼 것들**

- ["Redux 핵심" Part 3: 상태, 액션, 리듀서](../../tutorials/fundamentals/part-3-state-actions-reducers.md)
- [리덕스 도큐먼트: 보일러플레이트 줄이기](../ReducingBoilerplate.md)
- [리덕스 도큐먼트: 실행취소 구현하기](../ImplementingUndoHistory.md)
- [리덕스 도큐먼트: `combineReducers`](../../api/combineReducers.md)
- [고차 리듀서의 힘](http://slides.com/omnidan/hor#/)
- [스택 오버플로우: 초기 상태 저장과 `combineReducers`](http://stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer)
- [스택 오버플로우: 상태 키 이름과 `combineReducers`](http://stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer)

#### 순수함수와 사이드이펙트

**핵심 개념**:

- 사이드이펙트
- 순수함수
- 함수 결합의 관점으로 생각하기

**읽어볼 것들**:

- [함수형프로그래밍에 대한 작은 아이디어](http://jaysoo.ca/2016/01/13/functional-programming-little-ideas/)
- [프로그래밍에서의 사이드이펙트](http://c2fo.io/c2fo/programming/2016/05/11/understanding-programmatic-side-effects/)
- [자바스크립트에서의 함수형프로그래밍](https://youtu.be/e-5obm1G_FY)
- [합리적으로 순수한 함수형프로그래밍 소개](https://www.sitepoint.com/an-introduction-to-reasonably-pure-functional-programming/)

#### 불변데이터 관리

**핵심 개념**:

- 가변성 vs 불변성
- 객체와 배열을 쉽고 안전하게 업데이트하기
- 가변적인 함수와 명령 피하기

**읽어볼 것들**:

- [리액트에서 불변성을 사용할 떄의 장단점](http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)
- [자바스크립트와 불변성](http://t4d.io/javascript-and-immutability/)
- [ES6이상에서의 불변데이터](http://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)
- [스크래치의 불변데이터](https://ryanfunduk.com/articles/immutable-data-from-scratch/)
- [리덕스 도큐먼트: 객체전개연산자 사용](../UsingObjectSpreadOperator.md)

#### 데이터 정규화

**핵심 개념**:

- 데이터베이스 구조와 구성
- 관계/중첩 데이터를 분리 된 테이블로 쪼개기
- 특정 항목에 대한 한가지 정의 저장하기
- 아이디로 항목 호출하기
- 조회 ID로 항목 ID가 입력된 개체를 사용하고 아이디의 배열로 순서 추적하기
- 관계있는 항목 연결

**읽어볼 것들**:

- [쉬운 데이터베이스 정규화](http://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
- [관용적인 리덕스: 상태모양 정규화](https://egghead.io/lessons/javascript-redux-normalizing-the-state-shape)
- [Normalizr 도큐먼트](https://github.com/paularmstrong/normalizr)
- [깔끔한 리덕스: Normalizr](https://tonyhb.gitbooks.io/redux-without-profanity/content/normalizer.html)
- [리덕스 저장소 쿼리](https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f)
- [위키피디아: 연관 개체](https://en.wikipedia.org/wiki/Associative_entity)
- [데이터베이스 설계: Many-to-Many](http://www.tomjewett.com/dbdesign/dbdesign.php?page=manymany.php)
- [애플리케이션 상태의 우발적 복잡성 피하기](https://medium.com/@talkol/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a)
