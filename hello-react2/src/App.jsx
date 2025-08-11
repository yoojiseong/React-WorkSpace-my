import './App.css';

const name = '유지성';
const number = 0;
const unVar = undefined; // undefined 변수
const style = {
  backgroundColor: 'black',
  color: 'aqua',
  fonstSize: '48px',
  fontWeight: 'bold',
  padding: 20, //단위 생략하면 기본 px단위로 적용됨
};
function App() {
  return (
    // jsx 기본 문법(기존 HTML 형식으로 사용 가능),
    // vs jsx기본 문법 사용 안하면 어려움
    // <div>
    //방법2
    // <Fragment>
    // 방법3
    <>
      <h1>리액트 jsx 문법 처음 해보기</h1>
      <h2>1. 기본 jsx 문법 규칙, 감싸는 부모 태그가 필요함. 현재 오류가 남.</h2>
      <h3>2. 자바스크립트 표현식을 이요해서, 변수 부러오기 이름 : {name}</h3>
      <h3>안녕하세요</h3>
      {name === '유지성' ? (
        <h4>유지성님 환영합니다!</h4>
      ) : (
        <h4>회원가입이 필요합니다.</h4>
      )}
      <h3>
        4 아무것도 나타내고 싶지 않을 경우 , 빈 화면으로 나올경우 , null
        이용하기
      </h3>
      {name === '유지성' ? <h4></h4> : <h4>회원가입이 필요합니다.</h4>}
      <h3>5 && 연산자 이용해보기.</h3>
      {name === '유지성' && <h4>유지성이 맞습니다.</h4>}
      <h3>6 falsy 값 0 확인해보기.</h3>
      {number && <h4>0 값</h4>}
      <h3>7 undefined 확인해보기, OR(||)값 확인해보기.</h3>
      {unVar || '값 : undefined'}
      <h3 style={style}>
        8 인라인 스타일링 , 기존 : background-color , 변경 : BackgroundColor
      </h3>
      <h3 className="react">9 class 대신 className 속성 사용하기</h3>
      <h3 style={style}>
        10 닫아야 하는 태그 , br태그 , input 태그는 열기만 해도 상관없음.
        하지만, jsx안에서는 다름 , 반드시 짝 맞춰주기 <input /> 이거는 가능
      </h3>
      <h3>11 주석은 , 중괄호를 열고 , /* */ 중괄호 닫기</h3>
      {/* 주석의 사용법 예시 */}
      // 이런 주석은 그대로 나타나미 . /* 이 주석도 그대로 나타남*/
    </>
    // </div>
    // </Fragment>
  );
}

export default App;
