import { Todo } from '@prisma/client'

export type Methods = {
  get: {
    resBody: Todo[]
  }

  post: {
    reqBody: {
      title: string
    }
    resBody: Todo
  }

  delete: {
    reqBody: {
      id: number
    }
    resBody: {
      message: string
    }
  }
}
