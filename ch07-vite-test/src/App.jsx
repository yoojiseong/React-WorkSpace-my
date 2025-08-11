import "./App.css";
import LifeCycleSample from "./component/LifeCycleSample";
import ErrorBoundary from "./component/ErrorBoundary";

import React, { Component } from "react";

// rcc, 클래스형 컴포넌트의 코드 스니펫
class App extends Component {
  state = {
    show: true,
    color: "red",
  };

  // 부모는 App.jsx이고 자식 컴포넌트를 언마운트, 즉 소멸, 화면에서 제거하는 기능이다.
  handleUnmount = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <>
        <div>
          <h1 className="react">
            ch7 클래스 컴포넌트 생명주기(마운트 , 업데이트, 언마운트)
          </h1>
          {this.state.show && (
            <ErrorBoundary>
              <LifeCycleSample
                color={this.state.color}
                onRequestUnmount={this.handleUnmount}
              />
            </ErrorBoundary>
          )}
        </div>
      </>
    );
  }
}

export default App;

// 함수형 컴포넌트
// function App() {
//   return (
//     <>
//       <h1 className="react">
//         ch7 클래스 컴포넌트 생명주기(마운트 , 업데이트, 언마운트)
//       </h1>
//       <LifeCycleSample />
//     </>
//   );
// }

// export default App;
