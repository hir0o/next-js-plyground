import { usersRepository } from '@/repositories/users'
import { NextPage } from 'next'
import useSWR from 'swr'

const Page: NextPage = () => {
  const { data: users } = useSWR('users', usersRepository.getUsers)

  return (
    <div>
      {users?.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default Page
