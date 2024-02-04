import Axios from 'axios'
// import { AxiosStatic } from '@/src/typings/axios'
// import { AxiosInstance } from 'axios'
import throwError from '../utils/throwError'
// import { Notify } from 'quasar'
export const BASE_URL = 'https://103.85.87.250:8086'
const api = Axios.create({ baseURL: BASE_URL + '/api' })
export const reqs = ref(0)

api.interceptors.request.use(config => {
  reqs.value++
  const token = localStorage.getItem('token')
  if (token) {
    if (!config.headers) config.headers = {}
    Object.assign(config.headers, {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    })
  }
  return config
})

api.interceptors.response.use(
  config => {
    reqs.value--
    // if (config.data.msg)
    //   Notify.create({
    //     type: 'positive',
    //     message: config.data.msg
    //   })
    return config.data.data
  },
  err => {
    reqs.value--
    const code = err.code || err.response?.status || 500
    const msg = err.message || err.response?.data || err.response?.statusText
    const errMsg = `${code}：${msg}`
    throwError(errMsg)
    throw new Error(errMsg)
  }
)

export default api
/** 不带类型的 axios */
// export const axios = api as AxiosInstance

// declare module '@/src/typings/axios' {
//   // export interface AxiosResponse<T = any, D = any> {
//   //   data: T
//   //   status: number
//   //   statusText: string
//   //   headers: RawAxiosResponseHeaders | AxiosResponseHeaders
//   //   config: AxiosRequestConfig<D>
//   //   request?: any
//   // }
//   // @ts-ignore
//   export type AxiosResponse<T> = T['data']
// }

