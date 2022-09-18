import { User } from '@prisma/client'
import { fetcher } from '../lib/fetcher'

export const usersRepository = {
  getUsers: async () => {
    const users = await fetcher.get<{
      users: User[]
    }>('/api/users')
    return users
  },
}
