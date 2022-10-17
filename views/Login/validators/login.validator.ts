import { boolean, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { REGEX } from '@/constants'
export const loginSchema = object({
  dni: string().matches(REGEX.DNI, 'DNI inválido').required('Campo requerido'),
  phone: string().matches(REGEX.PHONE, 'Teléfono Inválido').required('Campo requerido'),
  placa: string().matches(REGEX.PLACA, 'Placa inválida').required('Campo requerido'),
  terms: boolean().isTrue('Debe aceptar los términos y condiciones para continuar!').required('Campo requerido')
})
export const loginResolver = yupResolver(loginSchema)
