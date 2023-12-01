import prisma from '@lib/prisma';
import { Title, Container, Space } from '@mantine/core';

import List from '@features/todo/components/List';
import Form from '@features/todo/components/Form';

const Home = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: 'asc',
    }
  });

  return (
    <Container py={24}>
      <Title order={1} mb="md">AppRouter+Prisma Todoアプリ</Title>
      <Form />
      <Space h={32} />
      { todos.length !== 0 && (
        <List todos={todos} />
      )}
    </Container>
  )
}

export default Home;
