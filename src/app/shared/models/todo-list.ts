export interface TodoList {
  id?: number;
  nameList: string;
  task: Array<tasks>;
}

export interface tasks{
  id?: number;
  nameTask: string;
  isDone?: boolean;
}
