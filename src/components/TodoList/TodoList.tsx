import { Todo } from '@prisma/client'
import { FC, useEffect, useState } from 'react'

export const TodoList: FC = () => {
  const [todo, setTodo] = useState<Todo[]>([])
  const [errorOccurred, setErrorOccurred] = useState(false)
  const [text, setText] = useState('')

  const isButtonDisabled = text === ''

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch('http://localhost:8080/api/todo')

      if (res.ok) {
        const data = await res.json()
        setTodo(data)
      } else {
        setErrorOccurred(true)
      }
    }

    fetchTodo()
  }, [])

  return (
    <div>
      <h1>todo list</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={text === ''}>作成</button>
      {todo.length > 0 ? (
        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.detail}</p>
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
