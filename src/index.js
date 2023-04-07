import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

const TodoList = () => {
  const items = ['Learn React', 'Create Awesome App'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

root.render(<App />);
