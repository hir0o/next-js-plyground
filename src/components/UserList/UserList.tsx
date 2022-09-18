import { usersRepository } from '@/repositories/users'
import { Session } from 'inspector'
import { FC, Suspense } from 'react'
import useSWR from 'swr'

export const UserList: FC = () => {
  const { data: users } = useSWR('users', usersRepository.getUsers, {
    suspense: true,
  })

  return (
    <div>
      {users?.map((user) => (
        <div>
          <p>name: {user.name}</p>
          <br />
          <p>email: {user.email}</p>
        </div>
      ))}
    </div>
  )
}
