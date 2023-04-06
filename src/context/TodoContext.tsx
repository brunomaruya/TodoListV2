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
  dispatch: () => {},
  deleteTodo: (id: number) => {},
};

export const TodoContext = createContext<TodoContextType>(initContext);

export function useTodo() {
  return useContext(TodoContext);
}

function reducer(todos: TodoState[], action: TodoAction): TodoState[] {
  switch (action.type) {
    case TodoActionKind.ADD_TODO:
      return [...todos, newTodo(action.payload.title, action.payload.details)];
    case TodoActionKind.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
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

  const deleteTodo = (id: number) => {
    dispatch({ type: TodoActionKind.DELETE_TODO, payload: { id: id } });
  };

  const values: TodoContextType = {
    handleSubmit,
    setTitle,
    title,
    setDetails,
    details,
    todos,
    dispatch,
    deleteTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
