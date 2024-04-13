import './App.css';
import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: "Sample text 1", completed: true },
  { text: "Sample text 2", completed: false },
  { text: "Sample text 3", completed: true },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={2} total={3} />
      <TodoSearch />

      <TodoList >
        {defaultTodos.map(
          todo => <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        )}



      </TodoList>

      <CreateTodoButton />

    </React.Fragment >
  );
}



export default App;
