import { Form } from '@/components/Form';
import List from '@/components/List';
import { todoList } from '@/db';
import Image from 'next/image';

const getTodos = async () => {
  return todoList;
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Form />
        <List todos={todos} />
      </main>
    </div>
  );
}
