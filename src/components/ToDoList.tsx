import BoxComp from '@/common/BoxComp';
import { useTodo } from '@/context/TodoContext';
import React from 'react';

export default function ToDoList() {
  const { todos } = useTodo();
  return (
    <div>
      {todos
        ? todos.map((todo) => (
            <div key={todo.id}>
              <BoxComp title={todo.title} details={todo.details} id={todo.id} />
            </div>
          ))
        : ''}
    </div>
  );
}
