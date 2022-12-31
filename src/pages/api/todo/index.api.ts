import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma, Todo } from '@/prisma'

type ResData = Todo[] | { err: string } | Todo

type ReqData = Todo

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      const todo = await prisma.todo.findMany()
      res.status(200).json(todo)
      break
    }
    case 'POST': {
      const body = req.body
      await prisma.todo.create({
        data: {
          title: body.title,
          detail: '',
          isChecked: false,
        },
      })

      res.status(201).send({
        message: 'success',
      })
      break
    }
    case 'DELETE': {
      const body = req.body
      await prisma.todo.delete({
        where: {
          id: body.id,
        },
      })

      res.status(204)
    }
    default:
      res.status(405).json({ err: 'Method Not Allowed' })
  }
}
