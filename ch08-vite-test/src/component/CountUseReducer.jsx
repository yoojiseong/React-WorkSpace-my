import React, {useReducer} from 'react';

// reducer 함수 정의
function  reducer(state, action){
  switch(action.type){// action.type에 따라사 다른 작업 수행
    case 'INCREMENT':
      return {value : state.value + 1};
    case 'DECREMENT':
      return {value : state.value - 1};
    default:
      return state;
  }
}

const CountUseReducer = () => {
  const [state, dispatch] = useReducer(reducer , {value:0})
  return (
    <div>
      <p>
        현재 값 : <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({type : 'DECREMENT'})}>-1</button>
    </div>
  );
};

export default CountUseReducer;