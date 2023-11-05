'use server'

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const addTodo = async (data: FormData) => {
  const todo = data.get('todo') as string;
  await prisma.todo.create({ data: { title: todo } });
  revalidatePath('/');
}

export const deleteTodo = async (data: FormData) => {
  const id = data.get('id') as string;
  await prisma.todo.delete({
    where: {
      id: +id,
    },
  });
  revalidatePath('/');
};

export async function doneTodo(id: number, published: boolean) {
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
