import { apiClient } from '@/lib/apiClient'
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'

const useTodoList = () => {
  return useSWR('todo', apiClient.todo.$get)
}

export const TodoList: FC = () => {
  const { data: todo, mutate, isLoading, isValidating } = useTodoList()

  const [errorOccurred, setErrorOccurred] = useState(false)
  const [text, setText] = useState('')

  const create = useCallback(async () => {
    const res = await apiClient.todo
      .$post({
        body: {
          title: text,
        },
      })
      .catch((e) => {
        console.log(e)
      })

    console.log('aaa', res)

    mutate((data) => {
      if (data === undefined) return
      return [
        ...data,
        {
          id: 1,
          title: text,
          detail: '',
          isChecked: false,
        },
      ]
    })

    setText('')
  }, [text, mutate])

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
      {isValidating && <p>更新中</p>}
      {isLoading && <h1>ロード中！！！！！！！！！！</h1>}
      {todo !== undefined && todo.length > 0 ? (
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
