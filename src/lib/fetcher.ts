export class ErrorOf404 extends Error {
  statusCode = 404
}

export class ErrorOf403 extends Error {
  statusCode = 403
}

export const fetcher = {
  get: async <T>(url: string) => {
    const res = await fetch(url)
    if (res.status === 404) {
      throw new ErrorOf404()
    }
    if (res.status === 403) {
      throw new ErrorOf403()
    }
    const data = (await res.json()) as T
    return data
  },
}
