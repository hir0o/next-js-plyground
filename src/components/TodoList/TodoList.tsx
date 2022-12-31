import { apiClient } from '@/lib/apiClient'
import { Todo } from '@prisma/client'
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
// import { container } from './TodoList.css'

export const TodoList: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([])
  const [errorOccurred, setErrorOccurred] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await apiClient.todo.$get()

        setTodo(res)
      } catch {
        setErrorOccurred(true)
      }
    }

    fetchTodo()
  }, [])

  const create = useCallback(async () => {
    await apiClient.todo.$post({
      body: {
        title: text,
      },
    })

    setText('')
  }, [text])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const handleDelete = useCallback(
    (id: number) => async () => {
      const res = await apiClient.todo.delete({
        body: {
          id,
        },
      })
    },
    []
  )

  return (
    <div>
      <h1>todo list</h1>
      <input type="text" value={text} onChange={onChange} />
      <button disabled={text === ''} onClick={create}>
        作成
      </button>
      {todo.length > 0 ? (
        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.detail}</p>
              <button type="button" onClick={handleDelete(item.id)}>
                削除
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>todo listがありません</p>
      )}

      {errorOccurred && <p>エラーが発生しました</p>}
    </div>
  )
}
