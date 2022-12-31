import { Modal } from '@/components/Modal'
import { UserList } from '@/components/UserList/UserList'
import { apiClient } from '@/lib/apiClient'
import { server } from '@/mocks/server'
import { NextPage } from 'next'
import Link from 'next/link'
import { Suspense, useRef, useState } from 'react'
import { preload } from 'swr'

const Page: NextPage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    dialogRef.current?.showModal()
  }
  const closeDialog = () => {
    dialogRef.current?.close()
  }
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Link href="/users">
        <a>ユーザー一覧</a>
      </Link>
      <Modal open={open} _ref={dialogRef} />
      <button type="button" onClick={openDialog}>
        ダイアログを開く showModal
      </button>

      <button type="button" onClick={() => setOpen(true)}>
        ダイアログを開く useState
      </button>
      <Link href="/todo">
        <p
          onMouseOver={() => {
            console.log('loading')

            preload('todo', apiClient.todo.$get)
          }}
        >
          トゥードゥーリスト
        </p>
      </Link>
    </div>
  )
}
export default Page
