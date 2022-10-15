import { useAppSelector } from '@/hooks'
import { selectUser } from '@/stateManagement/redux/slices'
import styles from './styles.module.scss'
export default function CardPlaca () {
  const { placa, marca, year, modelo } = useAppSelector(selectUser)
  return (
        <div className={styles.card} >
            <article className={styles.placa} >
                <label className={styles.placa__text} htmlFor="placa-auto">Placa:</label>
                <p className={styles.placa__text} id='placa-auto' >{placa}</p>
            </article>
            <article className={styles.card__content} >
                <p className={styles.card__text} >{marca}</p>
                <p className={styles.card__text} >{year}</p>
            </article>
            <p className={styles.card__text} >{modelo}</p>
        </div>
  )
}
