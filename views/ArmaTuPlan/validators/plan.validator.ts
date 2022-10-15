import { yupResolver } from '@hookform/resolvers/yup'
import { boolean, number, object } from 'yup'

export const planSchema = object({
  montoAsegurado: number().min(12500, 'El monto no debe ser menor de 12500').max(16500, 'El monto no debe ser mayor de 16500').required('El Monto asegurado es requerido'),
  llantaRobada: boolean().required('Campo requerido'),
  choqueLuzRoja: boolean().required('Campo requerido'),
  atropelloVia: boolean().required('Campo requerido')
})
export const planResolver = yupResolver(planSchema)
