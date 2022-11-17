import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])


  function handleSumbit(e) {
    e.preventDefault()
    if (value) {
      const newTodo = { title: value, id: Date.now(), box: false }
      setTodos(todos => [...todos, newTodo])
      setValue('')
    }
  }

  function remove(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function handlebox(id) {
    setTodos(todos.map(todo => {
      if (todo.id == id) {
        todo.box = !todo.box
      }
      return todo
    }))
  }

  return (
    <div className="App">
      <nav>
        <div class="nav-wrapper deep-purple lighten-2">
          <a href="" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="">дела</a></li>
            <li><a href=""><span class="new badge">4</span></a></li>
            <li><a href="">информация</a></li>
          </ul>
        </div>
      </nav>
      <form onSubmit={(e) => handleSumbit(e)}>
        <input
          type="text"
          placeholder='Введите дело'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      {todos.map(todo => {
        return (
          <li key={todo.id} className={todo.box ? 'box' : ''}>
            <input
              type="checkbox"
              checked={todo.box}
              onChange={() => handlebox(todo.id)}
            />
            {todo.title}
            <svg onClick={() => remove(todo.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </li>
        )
      })}
    </div>
  );
}

export default App;