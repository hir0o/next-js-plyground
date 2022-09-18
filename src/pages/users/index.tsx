import { NextPage } from 'next'
import { Suspense } from 'react'
import { UserList } from '@/components/UserList'
import { ErrorBoundary } from 'react-error-boundary'
import { ZodError } from 'zod'

const Page: NextPage = () => (
  <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => {
      if (error instanceof ZodError) {
        return (
          <div>
            <h1>ゾッドした...</h1>
          </div>
        )
      }

      return (
        <div>
          <h1>ゾッドしなかった!!!</h1>
        </div>
      )
    }}
  >
    <Suspense fallback={<p>loading...</p>}>
      <UserList />
    </Suspense>
  </ErrorBoundary>
)

export default Page
