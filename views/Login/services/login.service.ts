import { base } from '@/config'
import { AppService } from '@/types/models'
import { generateIdRandom, handleRequestError } from '@/utils'
import { LoginRequest } from '../types/requests'
import { LoginResponse } from '../types/responses'

export const login:AppService<LoginRequest, LoginResponse> = async (_body) => {
  try {
    const id = generateIdRandom()
    const { data } = await base.get<LoginResponse>(`/users/${id}`)
    return data
  } catch (e) {
    throw handleRequestError(e)
  }
}
