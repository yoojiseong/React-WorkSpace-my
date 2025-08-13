import React, { useReducer } from 'react';

//useReducer Hook 기능을 이용해서 커스텀 훅스 만들기
// 1. 리듀서 함수 : 상태를 관리하는 도구
function reducer(state, action){
  return{
    ...state,
    [action.name]: action.value
  }
}

// const UseInputs = () => {
//   return (
//     <div></div>
//   );
// };

export default function UseInputs(initialForm){
  const[state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target)
  }
  return [state, onChange];
};