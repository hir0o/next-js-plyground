import api from 'api/$api'
import aspida from '@aspida/fetch'

export const apiClient = api(
  aspida(fetch, {
    baseURL: 'http://localhost:3000/api',
  })
)
