import { Todo } from '@/prisma/index'
import { rest } from 'msw'

const todo: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    detail: 'Todo 1 detail',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    detail: 'Todo 2 detail',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Todo 3',
    detail: 'Todo 3 detail',
    isChecked: false,
  },
]

export const handlers = [
  rest.get('http://localhost:3000/api/todo', (req, res, ctx) => {
    return res(ctx.json(todo))
  }),
]
