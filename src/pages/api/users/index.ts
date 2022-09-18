import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma, User } from '@/prisma'

type Data = User[] | { err: string } | User

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      const users = await prisma.user.findMany()
      res.status(200).json(users[0])
      break
    }
    case 'POST':
      res.status(405).json({ err: 'Method Not Allowed' })
      break
    default:
      res.status(405).json({ err: 'Method Not Allowed' })
  }
}
