import { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => (
  <div>
    <Link href="/users">
      <a>ユーザー一覧</a>
    </Link>
  </div>
)

export default Page
