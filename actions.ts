'use server';

import { revalidatePath } from 'next/cache';
import { todoList } from './db';

export const addTodo = async (formData: FormData) => {
  const title = formData.get('title') as string;

  todoList.push({
    id: todoList.length + 1,
    title,
    completed: false,
  });

  revalidatePath('/');
};

export const toggleTodo = async (id: number) => {
  const todo = todoList.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }

  revalidatePath('/');
};
