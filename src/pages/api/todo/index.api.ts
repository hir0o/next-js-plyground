import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma, Todo } from '@/prisma'

type Data = Todo[] | { err: string } | Todo

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      const todo = await prisma.todo.findMany()
      res.status(200).json(todo)
      break
    }
    case 'POST':
      res.status(405).json({ err: 'Method Not Allowed' })
      break
    default:
      res.status(405).json({ err: 'Method Not Allowed' })
  }
}
