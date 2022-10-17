import { UserState } from '@/types/models'
import { RootState } from '@/types/redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReduxStates } from '../states'

export const initialState: UserState = {
  _id: 0,
  marca: '',
  modelo: '',
  monto: 0,
  nombre: '',
  email: '',
  placa: '',
  year: 0,
  dni: '',
  phone: ''
}
export const userSlice = createSlice({
  name: ReduxStates.User,
  initialState,
  reducers: {
    createUser: (_state, action:PayloadAction<UserState>) => {
      const user = action.payload
      return user
    },
    clearUser: () => {
      return initialState
    }
  }
})
export const { clearUser, createUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export const userReducer = userSlice.reducer
