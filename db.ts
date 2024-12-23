export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const todoList: Todo[] = [
  {
    id: 1,
    title: 'Learn TypeScript',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 3,
    title: 'Learn Node.js',
    completed: false,
  },
];
