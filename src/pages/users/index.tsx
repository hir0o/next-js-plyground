import { NextPage } from 'next'
import { Suspense } from 'react'
import { UserList } from '@/components/UserList'
import { ErrorBoundary } from '@/components/ErrorBoundaly'

const Page: NextPage = () => (
  <ErrorBoundary fallback={<p>error!!!!!!</p>}>
    <Suspense fallback={<p>loading...</p>}>
      <UserList />
    </Suspense>
  </ErrorBoundary>
)

export default Page
