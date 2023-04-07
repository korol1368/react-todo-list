import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

root.render(<App />);
