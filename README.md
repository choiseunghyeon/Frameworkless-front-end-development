# Frameworkless-front-end-development

## 프레임워크 없는 프론트엔드 개발 공부용

ref: https://github.com/Apress/frameworkless-front-end-development

YAGNI(You aren't gonna need it) 원칙

- 필요하다고 예측할 때가 아니라 실제로 필요할 때 구현하라.

Chapter 2. Rendering

- Diff 알고리즘
- 렌더링 엔진 구현
- 동적 데이터 렌더링

Chapter 3. Dom Event 관리

```javascript
<div>
  <button> Click Me </button>
</div>;

const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  e => {
    console.log("DIV Clicked");
  },
  false
);
button.addEventListener(
  "click",
  e => {
    console.log("BUTTOn Clicked");
  },
  false
);
```

- addEventListener에 이벤트 핸들러를 등록할 때 세 번째 파라미터(useCapture Parameter)의 기본 값은 false - Bubble Phase 핸들러 등록 후 이벤트 처리 (Bottom-up 방식)
- 세 번째 파라미터(useCapture Parameter)를 true로 하면 (Capture Phase에 이벤트 핸들러 등록 - Top-down 방식)
- 커스텀 이벤트
- template tag
- 이벤트 위임 / Element.matches
