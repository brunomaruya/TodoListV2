export enum TodoActionKind {
  ADD_TODO = 'add-todo',
  DELETE_TODO = 'delete-todo',
}

export interface TodoState {
  id: number;
  title: string;
  details: string;
  complete: boolean;
}

export interface TodoAction {
  type: TodoActionKind;
  payload: any;
}

export type TodoContextType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: Function;
  details: string;
  setDetails: Function;
  todos: TodoState[];
};
