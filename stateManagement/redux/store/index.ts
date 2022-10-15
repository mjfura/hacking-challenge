import { configureStore } from '@reduxjs/toolkit'
import { planReducer, userReducer } from '../slices'

export const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer
  }
})
