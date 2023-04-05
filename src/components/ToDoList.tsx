import BoxComp from '@/common/BoxComp';
import { TodoContext, useTodo } from '@/context/TodoContext';
import { TodoContextType } from '@/types/@types.todo';
import React from 'react';

export default function ToDoList() {
  const { todos } = useTodo();
  console.log(todos);
  return (
    <div>
      {todos
        ? todos.map((todo) => (
            <div key={todo.id}>
              <BoxComp title={todo.title} details={todo.details} />
            </div>
          ))
        : ''}
    </div>
  );
}
