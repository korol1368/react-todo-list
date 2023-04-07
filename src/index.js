import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

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
