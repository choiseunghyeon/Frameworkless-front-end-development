## Chapter 4. Web Component

- UI 구성을 위한 기본 블록으로 구성 요소를 사용
- 최신 웹 브라우저에서 네이티브 API 제공

### 세 가지 중요 기술

**_IE에서는 지원 하지 않음_**

- HTML 템플릿: <template> 태그는 렌더링 되지는 않지만 JS 코드에서 동적인 콘텐츠를 생성하는데 스탬프 역할을 한다.
- 사용자 정의 요소: 자신만의 DOM 요소를 작성할 수 있다.
- Shadow DOM: Web Component가 외부의 DOM에 영향을 받지 않아야 하는 경우에 유용(구성 요소 라이브러리나 위젯 작성에 유용)

**_ 사용자 정의 요소 _**

- 사용자 정의 태그를 작성할 때는 대시로 구분된 두 단어 이상의 태그를 사용해야 한다. (<app-calendar/>.)
- 사용자 정의 요소는 HTML 요소를 확장하는 자바스크립트 클래스일 뿐이다.
- 가능한 표준 DOM 요소와 동일하게 동작해야 한다.(Component 외부의 HTTP 요청 결과에 반응하려면 이벤트를 활용하자)
- 리액트와 비슷한 느낌

## Chapter 5. HTTP Request

![HTTPClient](./img/HTTPClientUML.png)

- XMLHttpRequest, Fetch, Axios
- 구현이 아닌 인터페이스로 프로그래밍 하라. (갱 오브 포)
  **_ 라이브러리를 사용할 때는 항상 인터페이스를 생성하라. 필요 시 새로운 라이브러리로 쉽게 변경할 수 있다. 153p. _**

## Chapter 6. Routing

- SPA 라우팅 시스템의 두 가지 핵심 요소는 경로 목록을 수집하는 레지스트리, 현재 URL의 리스너다.
- Fragment Identifier ref: https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
- History API
- 라우팅 시스템은 독립적으로 별도의 계층을 유지하는 것이 좋다.

## Chapter 7. State Management

![MVC](./img/MVC Schema.png)
**_ Work flow 컨트롤러 - C / 모델 - M / 뷰 - V _**

1. C는 M에서 초기 상태를 가져온다.
2. C는 V를 호출해 초기 상태를 렌더링 한다.
3. 시스템이 사용자 입력을 받을 준비가 된다.
4. 사용자가 동작 수행(항목 추가, 삭제 등)
5. C는 올바른 M의 메서드(model.addItem)를 사용자의 동작과 매핑
6. M은 상태를 업데이트한다.
7. C는 M에서 새로운 상태를 얻는다.
8. C는 V를 호출 해 새로운 상태를 렌더링 한다.
9. 시스템이 사용자 입력을 받을 준비가 된다.

![Rendering](./img/rendering.png)

- MVC
- Observer Pattern

**_ 반응형 프로그래밍 _**

- 모델 변경, HTTP 요청, 사용자 동작, 탐색 등과 같은 이벤트를 방출할 수 있는 옵저버블로 동작하도록 구현하는 것을 의미

**_이벤트 버스 패턴 211p._**

- 이벤트 주도 아키텍처(Event-Driven Architecture)를 구현하는 하나의 방법
- 애플리케이션을 구성하는 노드들을 연결하는 단일 객체가 모든 이벤트를 처리
- 이벤트가 처리되면 결과가 연결된 모든 노드로 전송된다.
