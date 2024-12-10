import axios, { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { env } from '../env'
export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (isAxiosError(error)) {
        const status = error.response?.status
        const code = error.response?.data.code
        if (status === 401 && code === 'UNAUTHORIZED') {
          const navigate = useNavigate()
          navigate('/sign-in', { replace: true })
        }
      }
      return Promise.reject(error)
    },
  )
}
