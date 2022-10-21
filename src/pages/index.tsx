import { Modal } from '@/components/Modal'
import { UserList } from '@/components/UserList/UserList'
import { server } from '@/mocks/server'
import { NextPage } from 'next'
import Link from 'next/link'
import { Suspense, useRef, useState } from 'react'

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
    </div>
  )
}
export default Page
