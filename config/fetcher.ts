import axios from 'axios'
import { API } from './env'

export const base = axios.create({
  baseURL: API
})
