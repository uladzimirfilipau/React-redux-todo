import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Buttons from './Buttons';

const App = () => (
  <main>
    <AddTodo />
    <VisibleTodoList />
    <Buttons />
  </main>
);

export default App;
