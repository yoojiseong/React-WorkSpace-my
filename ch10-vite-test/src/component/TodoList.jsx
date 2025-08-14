import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem.jsx';
// 가상화 최적화 준비
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // 가상의 줄을 추가하기. => 성능 최적화를 위해
  const rowRender = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    );
  }, [onRemove, onToggle, todos]);

  return (
    <List
      className="TodoList"
    width={512}
         // 개별 행의 높이는 57px*9 = 513
    height={513}
    rowCount={todos.length}
    rowHeight={57}
    rowRenderer = {rowRender}
    list={todos}
    style={{outline: 'none'}}
    >

      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
};

export default TodoList;
