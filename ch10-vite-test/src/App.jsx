
import './App.css'
import TodoTemplate from './component/TodoTemplate.jsx';
import TodoInsert from './component/TodoInsert.jsx';
import TodoList from './component/TodoList.jsx';
import { useCallback, useRef, useState } from 'react';

//더미 데이터 2500개 만드는 함수 작업하기
function createBulkTodos(){
  const array = []
  for(let i=1;i<=5000;i++){
    array.push({
      id:i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  // const[todos, setTodos] = useState([
  //   {id:1, text: '집 가서 노션 정리하기', checked: true},
  //   {id:2, text: '집가서 밥 먹기', checked: false},
  //   {id:3, text: '운동 하러 가기', checked: true},
  // ]);

// 성능 측정 더미 데이터
  const [todos, setTodos] = useState(createBulkTodos);

  //useRef 이용해서 렌더링에 영향받지 않는 값 사용하기
  const nextId = useRef(5001);
  // 글쓰기 함수 기능
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked : false
    };
    //concat => 기존 배열인 todos에 새로운 요소로 추가한 후 새 배열로 생성한다.

    //성능 최적화 방법1, 함수 형태로 변경
    // setTodos(todos.concat(todo));
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  })

  // 지우기 기능
  const onRemove = useCallback(
    id =>{
      //성능 최적화 방법1, 함수 형태로 변경
      // setTodos(todos.filter(todo=>todo.id!== id));
      // 변경
     setTodos((todos) => todos.filter((todo) => todo.id !== id));
      // 필터의 조건이 참인 경우에만 새로운 배열을 생성함
    },
    [todos],
  )

  //수정하기 기능
  const onToggle = useCallback(
    id=>{
      setTodos(
        // 최적화 방법 2. 함수 형태로 변경
        // todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo)
        todos=>todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo)

      )
    },

    [todos],
  )
  return (
    <>
      <h1 className="react">ch10 일정 관리 미니 프로젝트 </h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </>
  )
}

export default App
