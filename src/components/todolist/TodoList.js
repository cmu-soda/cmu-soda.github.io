import React from 'react'
import Todo from 'components/Todo'

// loop through the listenerCount, print
export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todoItem => {
      return <Todo key={todoItem.id} todo={todoItem} toggleTodo={toggleTodo}/>
    })
  )
}
