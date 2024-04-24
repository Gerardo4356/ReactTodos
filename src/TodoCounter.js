import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <h1 className='TodoCounter'>Has completado {completed} de {total} to do's</h1>
  );
}

export { TodoCounter }