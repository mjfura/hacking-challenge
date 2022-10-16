import PrimaryButton from '@/components/common/Button'
import CheckBox from '@/components/common/CheckBox'
import DocInput from '@/components/common/DocInput'
import Input from '@/components/common/Input'
import { Controller, SubmitHandler, useAppDispatch, useAppForm, useBoolean } from '@/hooks'
import { createUser } from '@/stateManagement/redux/slices'
import { handleError } from '@/utils'
import { useRouter } from 'next/router'
import { createUserAdapter } from '../../adapters'
import { login } from '../../services'
import { ILoginForm } from '../../types/forms'
import { loginResolver } from '../../validators'
import styles from './styles.module.scss'
export default function LoginForm () {
  const { formState: { errors }, handleSubmit, control } = useAppForm<ILoginForm>({
    resolver: loginResolver
  })
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const { value: loading, toggle } = useBoolean(false)
  const onSubmit:SubmitHandler<ILoginForm> = async (form) => {
    try {
      toggle()
      const response = await login(form)
      const user = createUserAdapter(response)
      dispatch(createUser({
        _id: user._id,
        dni: form.dni,
        marca: 'Wolkswagen',
        modelo: 'Golf',
        monto: 0,
        nombre: user.name,
        phone: form.phone,
        placa: form.placa,
        year: 2019
      }))
      push('/arma-tu-plan')
    } catch (e) {
      const error = e as Error
      handleError(error.message)
    } finally {
      toggle()
    }
  }
  return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
          <div className={styles.form__inputs} >
          <Controller control={control} name="dni" render={({ field }) => (
            <DocInput {...field} type="number"/>
          )} />
            {errors.dni ? <p>{errors.dni.message}</p> : <></> }
            <Controller control={control} name="phone" render={({ field }) => (
              <Input {...field} placeholder='Celular' type="number"/>
            )} />
          {errors.phone ? <p>{errors.phone.message}</p> : <></>}
          <Controller name='placa' control={control} render={({ field }) => (
            <Input {...field} placeholder='Placa' type="text" />
          )} />
          {errors.placa ? <p>{errors.placa.message}</p> : <></>}
          </div>
          <article className={styles.form__container} >

          <Controller control={control} name="terms" render={({ field }) => (
        <CheckBox {...field} label={
          <p className={styles.form__terms} >
            Acepto la <a className={styles.form__link} href="www.google.com">Política de Protección de Datos Personales</a> y los <a className={styles.form__link} href="www.google.com">Términos y Condiciones</a>
          </p>
        } />
          )} />

          {errors.terms ? <p>{errors.terms.message}</p> : <></>}
          </article>
          {
            loading
              ? <p>Loading...</p>
              : <PrimaryButton label='COTÍZALO' type='submit' />
          }
        </form>
  )
}
