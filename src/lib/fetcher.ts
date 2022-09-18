export const fetcher = {
  get: async <T>(url: string) => {
    const res = await fetch(url)
    const data = (await res.json()) as T
    return data
  },
}
