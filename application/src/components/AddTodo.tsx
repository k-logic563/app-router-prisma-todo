'use client';

import { addTodo } from '@/actions/todo';
import { TextInput, Button } from '@mantine/core';
import { useRef } from 'react';

const AddTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const add = async (data: FormData) => {
    const todo = `${data.get('todo')}`;
    if (!todo) return;

    if (!todo.trim()) return;

    await addTodo(data);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <form action={add} ref={formRef}>
      <TextInput name="todo" label="TODO" description="Please write your todo task." placeholder="shopping" mb={16} required />
      <Button type="submit" variant="filled">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
