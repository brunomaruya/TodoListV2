import BoxComp from '@/common/BoxComp';
import { TodoContext, useTodo } from '@/context/TodoContext';
import { TodoContextType, TodoState } from '@/types/@types.todo';
import React, { useCallback, useEffect, useState } from 'react';

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
