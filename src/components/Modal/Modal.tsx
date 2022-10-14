import { DialogHTMLAttributes, FC, MouseEventHandler, useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './Modal.module.scss'

type Props = {
  _ref: React.RefObject<HTMLDialogElement>
  open: boolean
}

/**
 * @package
 */
export const Modal: FC<Props> = ({ _ref, open }) => {
  const contentsRef = useRef<HTMLDivElement>(null)
  useClickAway(contentsRef, () => {
    _ref.current?.close()
  })

  return (
    <dialog className={styles.modal} ref={_ref} open={open}>
      <div className={styles.contents} ref={contentsRef}>
        <h1>Modal</h1>
        <p>ダイアログの中身</p>
      </div>
    </dialog>
  )
}
