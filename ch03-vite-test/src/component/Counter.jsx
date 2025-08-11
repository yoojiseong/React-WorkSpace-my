import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <>
        <div>
          <h1>{number}</h1>
          <h2>고정 값 : {fixedNumber}</h2>
        </div>
        <button
          onClick={() => {
            // 두 번 호출 될 줄 알았지만 두 번 호출 안됨
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // 두번 호출 하는 방법
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              }, // 콜백함수1
              () => {
                console.log(
                  "setState 가 동작 후, 추가 동작하는 함수 정의 해보기. "
                );
              } // 콜백함수2
            );
            // 한번 더 작성하기
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number - 1,
              };
            });
            this.setState((prevState) => {
              return {
                number: prevState.number - 1,
              };
            });
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number * 2 });
          }}
        >
          *2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number / 2 });
          }}
        >
          /2
        </button>
      </>
    );
  }
}

export default Counter;
