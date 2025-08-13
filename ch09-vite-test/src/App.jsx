
import './App.css'
import SassComponent from './component/SassComponent.jsx';
import CSSModule from './component/CSSModule.jsx';
import StyledComponent from './component/StyledComponent.jsx';

function App() {


  return (
    <>
     <h1 className = "react"> ch09 React의 스타일링</h1>
      <h2>scss 문법을 통한 확장된 css 문법 </h2>
      <SassComponent />

      <h2>CSSModule 문법을 이용한 중복되지않는 클래스명 사용하기 </h2>
      <CSSModule />

      <h2>StyledComponent 문법을 이용, css, scss 파일없이 컴포넌트 자체에서 css 구현 가능 </h2>
      <StyledComponent />
    </>
  )
}

export default App
