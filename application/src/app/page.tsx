import prisma from '@/lib/prisma';
import { Title, Container, Space } from '@mantine/core';

import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

const Home = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: 'asc',
    }
  });

  return (
    <Container py={24}>
      <Title order={1} mb="md">Todo一覧</Title>
      <AddTodo />
      <Space h={32} />
      { todos.length !== 0 && (
        <TodoList todos={todos} />
      )}
    </Container>
  )
}

export default Home;
