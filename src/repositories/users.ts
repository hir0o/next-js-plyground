import { UserModel } from '@/model/user'
import { fetcher } from '../lib/fetcher'

export const usersRepository = {
  getUsers: async () => {
    const res = await fetcher.get('/api/users')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    throw new Error('error')
    const result = UserModel.array().parse(res)
    return result
  },
}
