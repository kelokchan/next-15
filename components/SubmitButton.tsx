'use client';

import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="p-2 bg-blue-500 text-white rounded" type="submit">
      {pending ? 'Adding...' : 'Add'}
    </button>
  );
};
