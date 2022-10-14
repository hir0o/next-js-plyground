import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoList } from './TodoList'

describe('TodoList', () => {
  it('タイトルにtodo listが表示されていること', () => {
    render(<TodoList />)

    expect(screen.getByRole('heading')).toHaveTextContent('todo list')
  })
})
