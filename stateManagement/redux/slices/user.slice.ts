import { UserState } from '@/types/models'
import { RootState } from '@/types/redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: UserState = {
  _id: 0,
  marca: '',
  modelo: '',
  monto: 0,
  nombre: '',
  placa: '',
  year: 0,
  dni: '',
  phone: ''
}
export const userSlice = createSlice({
  name: 'user',
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
