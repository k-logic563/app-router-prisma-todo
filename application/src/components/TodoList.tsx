'use client'

import { type FC, useTransition } from 'react'
import { Table, Button, Checkbox } from '@mantine/core';

import { deleteTodo, doneTodo } from '@/actions/todo';
import type { Todo } from '@prisma/client';

type Props = {
  todos: Todo[]
}

const TodoList: FC<Props> = ({ todos }) => {
  let [_, startTransition] = useTransition();

  return (
    <Table striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>内容</Table.Th>
          <Table.Th>&ensp;</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {todos.map((todo) => (
          <Table.Tr key={todo.id}>
            <Table.Td width="100%">
              <Checkbox
                checked={todo.published}
                label={todo.title}
                styles={{ root: { wordBreak: 'break-all' } }}
                onChange={() => startTransition(() => doneTodo(todo.id, todo.published))}
              />
            </Table.Td>
            <Table.Td>
              <form>
                <input type="hidden" name="id" value={todo.id} />
                <Button
                  variant='outline'
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
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}

export default TodoList
