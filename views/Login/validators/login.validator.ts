import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export const loginSchema = object({
  dni: string().required('Campo requerido'),
  phone: string().required('Campo requerido'),
  placa: string().required('Campo requerido')
})
export const loginResolver = yupResolver(loginSchema)
