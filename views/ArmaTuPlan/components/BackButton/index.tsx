import { IoIosArrowDropleft } from 'react-icons/io'
import styles from './styles.module.scss'
export default function BackButton () {
  return (
    <button className={styles.button} >
          <span className={styles.button__icon} ><IoIosArrowDropleft/></span>
        <p className={styles.button__text} >Volver</p>
    </button>
  )
}
