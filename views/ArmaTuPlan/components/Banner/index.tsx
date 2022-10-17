import { useAppSelector } from '@/hooks'
import { selectUser } from '@/stateManagement/redux/slices'
import { multipleStyles } from '@/utils'
import BackButton from '../BackButton'
import CardPlaca from '../CardPlaca'
import styles from './styles.module.scss'
export default function Banner () {
  const { nombre } = useAppSelector(selectUser)
  return (
        <aside className={styles.banner} >
          <div className={styles.banner__back} >
            <BackButton/>
          </div>
          <h1 className={styles.banner__title} >¡Hola, <strong className={multipleStyles([styles.banner__title, styles['banner__title--primary']])} >{nombre}!</strong></h1>
            <h1 className={styles.banner__text_primary} >Mira las coberturas</h1>
            <h3 className={styles.banner__text_secondary} >Conoce las coberturas para tu plan</h3>
            <CardPlaca/>
        </aside>
  )
}
