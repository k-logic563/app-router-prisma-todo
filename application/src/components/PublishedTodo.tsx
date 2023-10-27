'use client';

import { useTransition } from 'react';
import { doneTodo } from '@/actions/todo';

const PublishedTodo = ({
  id,
  published,
}: {
  id: number,
  published: boolean,
}) => {
  let [_, startTransition] = useTransition();

  return (
    <input
      onChange={() => startTransition(() => doneTodo(id, published))}
      checked={published}
      type="checkbox"
    />
  );
};

export default PublishedTodo;
