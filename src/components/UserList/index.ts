import dynamic from 'next/dynamic'

export const UserList = dynamic(
  () => import('@/components/UserList/UserList').then((item) => item.UserList),
  {
    ssr: false,
  }
)
