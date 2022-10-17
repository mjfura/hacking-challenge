import styles from './styles.module.scss'
import check from '@/assets/check.svg'
import Image from 'next/image'
export default function Note () {
  return (
      <div className={styles.note} >
          <p className={styles.note__label} >El precio incluye:</p>
          <ul className={styles.note__list} >
              <li className={styles.note__item} >
                  <Image src={check} alt="lista de beneficios" />
                  <p className={styles.note__text} >Llanta de repuesto</p>
              </li>
              <li className={styles.note__item} >
                  <Image src={check} alt="lista de beneficios" />
                  <p className={styles.note__text} >Análisis de motor</p>
              </li>
              <li className={styles.note__item} >
                  <Image src={check} alt="lista de beneficios" />
                  <p className={styles.note__text} >Aros gratis</p>
              </li>
          </ul>
      </div>
  )
}
