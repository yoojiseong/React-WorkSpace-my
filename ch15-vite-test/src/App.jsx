import './App.css';
import ColorBox from './components/ColorBox.jsx';
import ColorContext, { ColorProvider } from './contexts/color.jsx';
import SetColors from './components/SetColors.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch15 ContextAPI 전역 저장소 만들기 </h1>
      <h2> 전역 저장소 설정 : 데이터를 전역 저장소에서 가져와서 사용하기</h2>
      <ColorProvider>
        <div>
          <SetColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </>
  );
}

export default App;
