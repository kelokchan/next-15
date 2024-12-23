'use client';

import { toggleTodo } from '@/actions';
import { Todo } from '@/db';

export default function List({ todos }: { todos: Todo[] }) {
  return (
    <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      {todos.map((todo) => (
        <li
          onClick={() => {
            toggleTodo(todo.id);
          }}
          key={todo.id}
          className={`mb-2 cursor-pointer ${
            todo.completed ? 'line-through' : ''
          }`}>
          {todo.title}
        </li>
      ))}
    </ol>
  );
}
