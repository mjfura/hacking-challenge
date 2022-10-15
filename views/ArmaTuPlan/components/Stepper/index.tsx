import { IoIosArrowDropleft } from 'react-icons/io'
import styles from './styles.module.scss'
export default function Stepper () {
  return (
        <div className={styles.stepper} >
      <span className={styles.stepper__icon} ><IoIosArrowDropleft/></span>
          <p className={styles.stepper__text} >Paso 2 de 2</p>
          <div className={styles.stepper__indicator} ></div>
        </div>
  )
}
