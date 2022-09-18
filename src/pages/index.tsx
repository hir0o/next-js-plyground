import { UserList } from '@/components/UserList/UserList'
import { NextPage } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

const Page: NextPage = () => (
  <div>
    <Suspense fallback="loading">
      <UserList />
    </Suspense>
    <Link href="/users">
      <a>ユーザー一覧</a>
    </Link>
  </div>
)

export default Page
