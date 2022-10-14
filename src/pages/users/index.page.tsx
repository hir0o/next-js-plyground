import { NextPage } from 'next'
import { Suspense } from 'react'
import { UserList } from '@/components/UserList'
import { ErrorBoundary } from 'react-error-boundary'
import { ZodError } from 'zod'
import { ErrorOf403, ErrorOf404 } from '@/lib/fetcher'

const Page: NextPage = () => (
  <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => {
      if (error instanceof ZodError) {
        return (
          <div>
            <h1>取得に失敗</h1>
          </div>
        )
      }

      if (error instanceof ErrorOf404) {
        return (
          <div>
            <h1>404だよ</h1>
          </div>
        )
      }

      if (error instanceof ErrorOf403) {
        return (
          <div>
            <h1>認証エラーです。</h1>
          </div>
        )
      }

      return (
        <div>
          <h1>なんらかのエラー</h1>
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
