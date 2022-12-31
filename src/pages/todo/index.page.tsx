import { TodoPage } from '@/components/TodoPage/TodoPage'
import { apiClient } from '@/lib/apiClient'
import type { NextPage } from 'next'
import { preload } from 'swr'

const Page: NextPage = () => {
  return <TodoPage />
}

export default Page
