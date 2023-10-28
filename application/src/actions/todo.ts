'use server'

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const addTodo = async (data: FormData) => {
  'use server';
  const todo = data.get('todo') as string;
  await prisma.todo.create({ data: { title: todo } });
  revalidatePath('/');
}

export const deleteTodo = async (data: FormData) => {
  'use server';
  const id = data.get('id') as string;
  await prisma.todo.delete({
    where: {
      id: +id,
    },
  });
  revalidatePath('/');
};

export async function doneTodo(id: number, published: boolean) {
  'use server';
  await prisma.todo.update({
    where: {
      id: +id,
    },
    data: {
      published: !published,
    },
  });
  revalidatePath('/');
}
