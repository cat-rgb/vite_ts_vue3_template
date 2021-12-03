import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Nprogress from 'nprogress'

// 设置请求头和请求路径
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config): AxiosRequestConfig => {
    config.headers!.token = ''
    return config
  },
  (err) => {
    console.log(err)
  }
)

axios.interceptors.response.use(
  (res): AxiosResponse => {
    return res
  },
  (err) => {
    console.log(err)
  }
)

interface ResType<T> {
  data?: T
  success: boolean
  msg: string
  code: string | number
  err?: string
}

export default axios
