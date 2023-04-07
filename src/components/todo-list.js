import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <div>
      <li>
        <TodoListItem />
      </li>
      <li>
        <TodoListItem />
      </li>
    </div>
  );
};

export default TodoList;
