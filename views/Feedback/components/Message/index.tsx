import PrimaryButton from '@/components/common/Button'
import { useAppSelector } from '@/hooks'
import { selectPlan } from '@/stateManagement/redux/slices'
import { handleSuccess, multipleStyles } from '@/utils'
import styles from './styles.module.scss'
export default function Message () {
  const { montoFinal } = useAppSelector(selectPlan)
  const handleClick = () => {
    handleSuccess(`Tu monto final mensual es: $${montoFinal.toFixed(2)}`)
  }
  return (
        <div className={styles.message} >
            <article className={styles.message__article} >
            <h3 className={multipleStyles([styles.message__title, styles['message__title--primary']])} >¡Te damos la bienvenida!</h3>
            <h3 className={styles.message__title} >Cuenta con nosotros para proteger tu vehículo</h3>
            </article>
            <article className={styles.message__content} >
            <p className={styles.message__text} >Enviaremos la confirmación de compra de tu Plan Vehicular Tracking a tu correo:</p>
            <p className={multipleStyles([styles.message__text, styles['message__text--strong']])} >joel.sanchez@gmail.com</p>
            </article>
            <div className={styles.message__button} >
            <PrimaryButton onClick={handleClick} label='Cómo usar mi seguro' type='button' />
            </div>
        </div>
  )
}
