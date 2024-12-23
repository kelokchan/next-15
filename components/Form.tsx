import { addTodo } from '@/actions';
import { SubmitButton } from './SubmitButton';

export const Form = () => {
  return (
    <form action={addTodo} className="flex flex-col gap-4">
      <input
        name="title"
        className="p-2 border text-black border-gray-300 rounded"
        type="text"
        placeholder="Add a new todo..."
      />
      <SubmitButton />
    </form>
  );
};
