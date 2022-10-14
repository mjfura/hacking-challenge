import { SubmitHandler, useAppForm } from '@/hooks'
import { handleError } from '@/utils'
import { ILoginForm } from '../../types/forms'
import { loginResolver } from '../../validators'

export default function LoginForm () {
  const { register, formState: { errors }, handleSubmit } = useAppForm<ILoginForm>({
    resolver: loginResolver
  })
  const onSubmit:SubmitHandler<ILoginForm> = async (form) => {
    try {
      console.log(form)
    } catch (e) {
      const error = e as Error
      handleError(error.message)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input {...register('dni')} type="number" />
            {errors.dni ? <p>{errors.dni.message}</p> : <></> }
            <input {...register('phone')} type="text" />
            <input {...register('placa')} type="text" />
            <button type='submit' >Cotizar</button>
        </form>
  )
}
