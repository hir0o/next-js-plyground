import { UserModel } from '@/model/user'
import { User } from '@prisma/client'
import { fetcher } from '../lib/fetcher'

export const usersRepository = {
  getUsers: async () => {
    const users = await fetcher.get<User[]>('/api/users')
    const result = UserModel.array().safeParse(users)
    if (result.success) {
      return result.data
    }
    return []
  },
}
