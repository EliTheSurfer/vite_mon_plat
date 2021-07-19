/* eslint-disable @typescript-eslint/no-namespace */
import { TodoModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  router?: unknown;
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
