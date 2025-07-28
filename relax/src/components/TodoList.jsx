import React from 'react';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul className="todo-list" aria-label="To-Do List">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={todo.completed ? 'completed' : ''}
        role="listitem"
      >
        <span onClick={() => onToggle(todo.id)} tabIndex={0} onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') onToggle(todo.id);
        }}>
          {todo.text}
        </span>
        <button aria-label={`Delete task: ${todo.text}`} onClick={() => onDelete(todo.id)}>❌</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
