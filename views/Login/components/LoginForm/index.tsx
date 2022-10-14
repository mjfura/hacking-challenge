import { SubmitHandler, useAppForm } from '@/hooks'
import { handleError } from '@/utils'
import { useRouter } from 'next/router'
import { useId } from 'react'
import { createUserAdapter } from '../../adapters'
import { login } from '../../services'
import { ILoginForm } from '../../types/forms'
import { loginResolver } from '../../validators'

export default function LoginForm () {
  const { register, formState: { errors }, handleSubmit } = useAppForm<ILoginForm>({
    resolver: loginResolver
  })
  const { push } = useRouter()
  const onSubmit:SubmitHandler<ILoginForm> = async (form) => {
    try {
      const response = await login(form)
      const user = createUserAdapter(response)
      console.log('response', user)
      push('/arma-tu-plan')
    } catch (e) {
      const error = e as Error
      handleError(error.message)
    }
  }
  const id = useId()
  return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input {...register('dni')} type="number" />
            {errors.dni ? <p>{errors.dni.message}</p> : <></> }
            <input {...register('phone')} type="number" />
          {errors.phone ? <p>{errors.phone.message}</p> : <></>}
            <input {...register('placa')} type="text" />
          {errors.placa ? <p>{errors.placa.message}</p> : <></>}
            <div>
            <input id={id + '-terms'} {...register('terms')} type="checkbox" />
            <label htmlFor={id + '-terms'}>Acepto la Política de Protección de Datos y los Términos y Condiciones</label>
            </div>
          {errors.terms ? <p>{errors.terms.message}</p> : <></>}
            <button type='submit' >Cotízalo</button>
        </form>
  )
}
