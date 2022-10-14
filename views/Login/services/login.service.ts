import { base } from '@/config'
import { AppService } from '@/types/models'
import { handleRequestError } from '@/utils'
import { LoginRequest } from '../types/requests'
import { LoginResponse } from '../types/responses'

export const login:AppService<LoginRequest, LoginResponse> = async (body) => {
  try {
    console.log('Request Body: ', body)
    const { data } = await base.get<LoginResponse>('/users/1')
    return data
  } catch (e) {
    throw handleRequestError(e)
  }
}
