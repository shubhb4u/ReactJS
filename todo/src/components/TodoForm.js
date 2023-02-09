import React from 'react'

const TodoForm = ({handleSubmit,todo,handleTodo,editId}) => {
  return (
   
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleTodo}></input>
          <button type='submit'> {editId? 'Edit' : 'Go'}</button>
        </form>
  )
}

export default TodoForm