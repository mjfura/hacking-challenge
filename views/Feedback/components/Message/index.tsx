import PrimaryButton from '@/components/common/Button'
import { multipleStyles } from '@/utils'
import styles from './styles.module.scss'
export default function Message () {
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
            <PrimaryButton label='Cómo usar mi seguro' type='button' />
        </div>
  )
}
