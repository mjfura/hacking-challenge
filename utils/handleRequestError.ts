import { AxiosError } from 'axios'

export const handleRequestError = (err:any) => {
  const error = err as AxiosError<{message:string}>
  if (error.response) {
    return new Error(error.response.data.message)
  }
  if (error.code === '404') return new Error('Recurso no encontrado')

  return new Error('No hubo respuesta del servidor')
}
