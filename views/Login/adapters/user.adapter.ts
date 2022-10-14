import { User } from '../types/models'
import { LoginResponse } from '../types/responses'

export const createUserAdapter = (response:LoginResponse):User => {
  return {
    ...response,
    _id: response.id
  }
}
