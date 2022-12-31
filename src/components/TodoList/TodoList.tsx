import { Todo } from '@prisma/client'
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
// import { container } from './TodoList.css'

export const TodoList: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([])
  const [errorOccurred, setErrorOccurred] = useState(false)
  const [text, setText] = useState('')

  const isButtonDisabled = text === ''

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch('http://localhost:3000/api/todo')

      if (res.ok) {
        const data = await res.json()
        setTodo(data)
      } else {
        setErrorOccurred(true)
      }
    }

    fetchTodo()
  }, [])

  const create = useCallback(async () => {
    const res = await fetch('http://localhost:3000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: text,
      }),
    })
    console.log(res)

    setText('')
  }, [text])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const handleDelete = useCallback(
    (id: number) => async () => {
      const res = await fetch('http://localhost:3000/api/todo', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
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
