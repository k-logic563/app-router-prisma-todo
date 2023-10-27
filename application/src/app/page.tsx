import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const Home = async () => {
  const todos = await prisma.todo.findMany();

  const addTodo = async (data: FormData) => {
    'use server';
    const todo = data.get('todo') as string;
    await prisma.todo.create({ data: { title: todo } });
    revalidatePath('/');
  }

  const deleteTodo = async (data: FormData) => {
    'use server';
    const id = data.get('id') as string;
    await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath('/posts');
  };

  return (
    <main className="p-24">
      <h1 className="text-xl font-bold mb-8">Todo一覧</h1>
      <form className="flex items-center mb-4" action={addTodo}>
        <label htmlFor="todo">Todo:</label>
        <input id="todo" type="text" name="todo" className="border mx-2 p-1" />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Add Todo
        </button>
      </form>
      <ul className="grid gap-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className={`flex items-center space-x-2 ${
            todo.published ? 'line-through' : ''
          }`}>
            <span>{todo.title}</span>
            <form>
              <input type="hidden" name="id" value={todo.id} />
              <button
                className="bg-red-500 px-2 py-1 rounded-lg text-sm text-white"
                formAction={deleteTodo}
              >
                削除
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home;
