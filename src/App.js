import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


function App() {
  return (
    <div className="App">
      <body>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>

        <CreateTodoButton />

      </body>
    </div>
  );
}



export default App;
