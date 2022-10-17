import { useAppSelector } from '@/hooks'
import { selectUser } from '@/stateManagement/redux/slices'
import Image from 'next/image'
import styles from './styles.module.scss'
import planUserImg from '@/assets/planUserImg.svg'
import { multipleStyles } from '@/utils'
export default function CardPlaca () {
  const { placa, marca, year, modelo } = useAppSelector(selectUser)
  return (
        <div className={styles.card} >
            <div className={styles.card__container} >
            <article className={styles.placa} >
                <label className={styles.placa__text} htmlFor="placa-auto">Placa:</label>
                <p className={multipleStyles([styles.placa__text, styles['placa__text--uppercase']])} id='placa-auto' >{placa}</p>
            </article>
            <article className={styles.card__content} >
                <p className={styles.card__text} >{marca}</p>
                <p className={styles.card__text} >{year}</p>
            </article>
            <p className={styles.card__text} >{modelo}</p>
            </div>
            <Image src={planUserImg} alt="Placa User Rimac" />
        </div>
  )
}
