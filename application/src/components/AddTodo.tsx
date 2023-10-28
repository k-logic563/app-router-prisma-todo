'use client';

import { addTodo } from '@/actions/todo';
import { useRef } from 'react';

const AddTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const add = async (data: FormData) => {
    const todo = data.get('todo') as string;
    if (!todo.trim()) return;

    await addTodo(data);
    if (formRef.current) formRef.current.reset();
  };
  return (
    <form className="flex items-center mb-4" action={add} ref={formRef}>
      <label htmlFor="todo">Todo:</label>
      <input id="todo" type="text" name="todo" className="border mx-2 p-1" />
      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded text-sm text-white"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
