import React, {useState} from 'react'
import './App.css'

const App = () => {

  const [todo,setTodo] = useState('');
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId !== ''){
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodo = todos.map((t) => 
      t.id === editTodo.id? 
      (t = {id: t.id, todo}) : {id: t.id, todo: t.todo}
      );

      setTodos(updatedTodo);
      setEditId();
      setTodo('');
      return;
    }

    if(todo !== ""){
      setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
    }
    setTodo('');
  
  };

  const handleTodo = (event) =>{
    setTodo(event.target.value);
     
  };


  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }


  const handleEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleTodo}></input>
          <button type='submit'> {editId? 'Edit' : 'Go'}</button>
        </form>

        <ul className='allTodos'>

          {
            todos.map((t) => (
              <li className='singleTodo' key={t.id}>
                <span className='todoText'>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App