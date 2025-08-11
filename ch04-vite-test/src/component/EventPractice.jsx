import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };
  // 태그에 직접 정의한 이벤트 핸들링 작업, 따로 분리 작업
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // 이벤트 핸들링 따로 정의,
  handleChange(e) {
    this.setState({
      //변경 전
      //   message: e.target.value,
      // 변경 후
      // input이 두 개가 될 예정 , 각 input의 이름에 해당하는 객체를 불러와서 사용하기.
      [e.target.name]: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.username + " : " + this.state.message);
    this.setState({
      message: "",
      username: "",
    });
  }
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>1 onChange 연습 해보기.</h2>
        <h3>message : {this.state.message}</h3>
        <h3>username : {this.state.username}</h3>
        <input
          type="text"
          name="message"
          placeholder="입력하세요"
          value={this.state.message} // getter, state 객체 안의 message 조회
          // 직접 이벤트를 설정하는 법
          //   onChange={(e) => {
          //     // setter, state 의 객체의 message 값을 변경.
          //     this.setState({ message: e.target.value });
          //   }}
          // 방법2, 따로 정의한 이벤트 핸들링 작업
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="사용자명 입력하기"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <h2>2 onClick 연습 해보기.</h2>
        <button
          // 직접 이벤트를 설정하는 법
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({ message: "" });
          //   }}
          // 방법2, 따로 정의한 이벤트 핸들링 작업
          onClick={this.handleClick}
        >
          확인
        </button>
      </>
    );
  }
}

export default EventPractice;
