import prisma from '@/lib/prisma';

import { deleteTodo } from '@/actions/todo';
import PublishedDodo from '@/components/PublishedTodo';
import AddTodo from '@/components/AddTodo';

const Home = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <main className="p-24">
      <h1 className="text-xl font-bold mb-8">Todo一覧</h1>
      <AddTodo />
      <ul className="grid gap-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className={`flex items-center space-x-2 ${
            todo.published ? 'line-through' : ''
          }`}>
            <PublishedDodo id={todo.id} published={todo.published}  />
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
