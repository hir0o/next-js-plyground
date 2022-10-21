import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoList } from './TodoList'
// import { setupServer } from 'msw/lib/node'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { Todo } from '@prisma/client'
import { rest } from 'msw'
// import { server } from '@/mocks/server'
import fetch from 'node-fetch'

// eslint-disable-next-line
if (!globalThis.fetch) {
  // @ts-ignore
  globalThis.fetch = fetch
}

const todo: Todo[] = [
  {
    id: 1,
    title: 'todo1',
    detail: 'test detail',
    isChecked: false,
  },
  {
    id: 2,
    title: 'todo2',
    detail: 'test detail',
    isChecked: false,
  },
  {
    id: 3,
    title: 'todo3',
    detail: 'test detail',
    isChecked: false,
  },
]

const server = setupServer(
  rest.get('http://localhost:8080/api/todo', async (req, res, ctx) => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve()
      }, 1000)
    )
    return res(ctx.status(200), ctx.json(todo))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('TodoList', () => {
  it('タイトルが表示されていること', () => {
    render(<TodoList />)

    expect(screen.getByRole('heading')).toHaveTextContent('todo list')
  })

  it('inputが空だと追加ボタンが押せないこと', () => {
    render(<TodoList />)

    expect(screen.getByRole('textbox')).toHaveValue('')
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('inputに入力があると、ボタンが押せること', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    expect(screen.getByRole('textbox')).toHaveValue('')

    user.type(screen.getByRole('textbox'), 'test')
    waitFor(() => expect(screen.getByRole('button')).toBeEnabled())
  })

  it('todo listが表示されていること', () => {
    render(<TodoList />)

    waitFor(async () => {
      const listItems = await screen.findAllByRole('listitem')
      expect(listItems).toHaveLength(3)
      expect(listItems[0]).toHaveTextContent('todo1')
      expect(listItems[1]).toHaveTextContent('todo2')
      expect(listItems[2]).toHaveTextContent('todo3')
    })
  })

  it('listが空の場合、todo listが表示されていないこと', async () => {
    server.use(
      rest.get('http://localhost:8080/api/todo', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
      })
    )
    render(<TodoList />)

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument()

    waitFor(() => {
      expect(screen.getByText('todo listがありません')).toBeInTheDocument()
    })
  })

  it('サーバーから500エラーが帰ってくると、エラーメッセージが表示されること', async () => {
    server.use(
      rest.get('http://localhost:8080/api/todo', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    render(<TodoList />)

    expect(await screen.findByText('エラーが発生しました')).toBeInTheDocument()
  })

  // it('タスクを入力して、作成できること', async () => {
  //   const user = userEvent.setup()

  //   render(<TodoList />)

  //   const input = screen.getByRole('textbox')
  //   const button = screen.getByRole('button', { name: '作成' })

  //   await waitFor(async () => {
  //     await user.type(input, 'create todo item')
  //     user.click(button)
  //   })

  //   await waitFor(() => {
  //     expect(screen.getByText('create todo item')).toBeInTheDocument()
  //   })
  // })
})
