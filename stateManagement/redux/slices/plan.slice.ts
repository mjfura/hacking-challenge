import { Plan } from '@/types/models'
import { RootState } from '@/types/redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Plan = {
  atropelloVia: false,
  choqueLuzRoja: false,
  llantaRobada: false,
  montoAsegurado: 14300,
  montoFinal: 20
}
export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    plus: (state) => {
      if (state.montoAsegurado + 100 <= 16500) {
        state.montoAsegurado += 100
      }
    },
    minus: (state) => {
      if (state.montoAsegurado - 100 >= 12500) {
        state.montoAsegurado -= 100
      }
    },
    enableLlantaRobada: (state) => {
      state.llantaRobada = true
      state.montoFinal += 15
    },
    disableLLantaRobada: (state) => {
      state.llantaRobada = false
      state.montoFinal -= 15
    },
    enableAtropelloVia: (state) => {
      state.atropelloVia = true
      state.montoFinal += 50
    },
    disableAtropelloVia: (state) => {
      state.atropelloVia = false
      state.montoFinal -= 50
    },
    enableChoqueLuzRoja: (state) => {
      if (!state.choqueLuzRoja) {
        state.choqueLuzRoja = true
        state.montoFinal += 20
      }
    },
    disableChoqueLuzRoja: (state) => {
      if (state.choqueLuzRoja) {
        state.choqueLuzRoja = false
        state.montoFinal -= 20
      }
    },
    clearPlan: () => {
      return initialState
    }
  }
})
export const { plus, minus, clearPlan, disableAtropelloVia, disableChoqueLuzRoja, disableLLantaRobada, enableAtropelloVia, enableChoqueLuzRoja, enableLlantaRobada } = planSlice.actions
export const selectPlan = (state: RootState) => state.plan
export const planReducer = planSlice.reducer
