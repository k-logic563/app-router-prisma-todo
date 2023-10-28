import React from 'react'

import { deleteTodo } from '@/actions/todo';
import PublishedDodo from '@/components/PublishedTodo';
import type { Todo } from '@prisma/client';

type Props = {
  todos: Todo[]
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
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
  )
}

export default TodoList
