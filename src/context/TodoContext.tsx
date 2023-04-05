import {
  TodoAction,
  TodoActionKind,
  TodoContextType,
  TodoState,
} from '@/types/@types.todo';

import React, { createContext, useContext, useReducer, useState } from 'react';

const initContext = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
  setTitle: () => {},
  title: '',
  setDetails: () => {},
  details: '',
  todos: [],
};

export const TodoContext = createContext<TodoContextType>(initContext);

export function useTodo() {
  return useContext(TodoContext);
}

function reducer(todos: TodoState | any, action: TodoAction): TodoState | any {
  switch (action.type) {
    case TodoActionKind.ADD_TODO:
      return [...todos, newTodo(action.payload.title, action.payload.details)];

    default:
      return todos;
  }
}

function newTodo(title: string, details: string) {
  return { id: Date.now(), title: title, details: details, complete: false };
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: TodoActionKind.ADD_TODO,
      payload: { title: title, details: details },
    });
    setTitle('');
    setDetails('');
  }

  const values: TodoContextType = {
    handleSubmit,
    setTitle,
    title,
    setDetails,
    details,
    todos,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
