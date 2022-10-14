import { UserList } from '@/components/UserList'
import { NextPageWithGetLayout } from 'next'
import { Suspense, useDeferredValue, useState, useTransition } from 'react'

export const Example04 = () => {
  const [text, setText] = useState('')

  const deferredText = useDeferredValue(text)

  console.log(text, deferredText)

  return (
    <>
      <h1>04 Example of useDeferredValue</h1>
      <p>
        <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
      </p>
      <p>{deferredText}</p>
    </>
  )
}

export const Example02 = () => {
  const [showChild, setShowChild] = useState(false)
  // ここでuseTransitionを使用
  const [isPending, startTransition] = useTransition()
  console.log({ isPending })

  return (
    <>
      <h1>02 Example of useTransition</h1>
      <Suspense fallback={<p>loading...</p>}>
        {showChild ? (
          <UserList />
        ) : (
          <button
            disabled={isPending}
            type="button"
            onClick={() => {
              startTransition(() => {
                setShowChild(true)
              })
            }}
          >
            追加コンテンツを表示
          </button>
        )}
      </Suspense>
    </>
  )
}

const Page: NextPageWithGetLayout = () => <Example02 />

export default Page
