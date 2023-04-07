import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <div>
      <li>
        <TodoListItem label="Create React App" important />
      </li>
      <li>
        <TodoListItem label="Drink Coffee" />
      </li>
    </div>
  );
};

export default TodoList;
