import prisma from '@/lib/prisma';

import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

const Home = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <main className="p-24">
      <h1 className="text-xl font-bold mb-8">Todo一覧</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </main>
  )
}

export default Home;
