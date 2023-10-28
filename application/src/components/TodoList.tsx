'use client'

import { type FC, useTransition } from 'react'
import { Grid, Button, Group, Checkbox, Paper } from '@mantine/core';

import { deleteTodo, doneTodo } from '@/actions/todo';
import type { Todo } from '@prisma/client';

type Props = {
  todos: Todo[]
}

const TodoList: FC<Props> = ({ todos }) => {
  let [_, startTransition] = useTransition();

  return (
    <Grid>
      {todos.map((todo) => (
        <Grid.Col span={4} key={todo.id}>
          <Paper shadow="sm" p="sm" radius="sm" withBorder>
            <Group justify='space-between' align='center' wrap="nowrap">
              <Checkbox
                checked={todo.published}
                label={todo.title}
                styles={{ root: { wordBreak: 'break-all' } }}
                onChange={() => startTransition(() => doneTodo(todo.id, todo.published))}
              />
              <form>
                <input type="hidden" name="id" value={todo.id} />
                <Button
                  variant='filled'
                  color='red'
                  size="xs"
                  type='submit'
                  styles={{
                    root: {
                      whiteSpace: 'nowrap',
                    }
                  }}
                  formAction={deleteTodo}
                >
                  削除
                </Button>
              </form>
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default TodoList
