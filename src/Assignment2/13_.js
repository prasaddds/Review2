//13_.js
import React from 'react';

export default function TodoList({ todos }){
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

