import { multipleStyles } from '@/utils'
import { IoIosArrowDropleft } from 'react-icons/io'
import styles from './styles.module.scss'
export default function Stepper () {
  return (
        <div className={styles.stepper} >
          <div className={styles.stepper__mobile} >
      <span className={styles.stepper__icon} ><IoIosArrowDropleft/></span>
          <p className={styles.stepper__text} >Paso 2 de 2</p>
          <div className={styles.stepper__indicator} ></div>
          </div>
            <ul className={styles.stepper__list} >
              <li className={styles.stepper__item} >
                <span className={styles.stepper__number} >
                  1
                </span>
                <p className={styles.stepper__label} >Datos</p>
              </li>
              <li className={styles.stepper__item} >
                <span className={multipleStyles([styles.stepper__number, styles['stepper__number--selected']])} >
                  2
                </span>
                <p className={multipleStyles([styles.stepper__label, styles['stepper__label--selected']])} >Arma tu plan</p>
              </li>
            </ul>

        </div>
  )
}
