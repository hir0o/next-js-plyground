import { usersRepository } from '@/repositories/users'
import { NextPage } from 'next'
import useSWR from 'swr'

const Page: NextPage = () => {
  const { data } = useSWR('users', usersRepository.getUsers)

  return (
    <div>
      {data?.users?.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default Page
