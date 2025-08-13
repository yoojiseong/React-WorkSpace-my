import React from 'react';
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss"
import {useState, useCallback} from "react";

const TodoInsert = ({onInsert, onToggle}) => {
  const[value, setValue] = useState('');

  // 최초 1회만 생성 후 함수 재사용
  const onChange = useCallback( e => {
     setValue(e.target.value);
  }, []);

  //글 작성 로직
  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue('');
    e.preventDefault()
  }, [onInsert, value]);
  //[onInsert, value] =>  onInsert 또는 value의 상태가 바뀔때마다 콜백 함수 실행한다는 뜻임

  return (
      <form className="TodoInsert" onSubmit={onSubmit} onToggle={onToggle}>
        <input placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}/>
        <button type="submit">
          <MdAdd />
        </button>
      </form>
  );
};

export default TodoInsert;