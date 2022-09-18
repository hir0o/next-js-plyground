import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma, User } from '@/prisma'

type Data = User[] | { err: string } | User[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // [5] リクエスト method を調べる
  switch (req.method) {
    case 'GET': {
      const users = await prisma.user.findMany()
      res.status(200).json(users)
      break
    }
    case 'POST':
      res.status(405).json({ err: 'Method Not Allowed' })
      break
    default:
      // [9] POST method 以外は 405 を返す
      res.status(405).json({ err: 'Method Not Allowed' })
  }
}
