import { PublicRoutes } from '@/routes'
import { useRouter } from 'next/router'
import { IoIosArrowDropleft } from 'react-icons/io'
import styles from './styles.module.scss'
export default function BackButton () {
  const { push } = useRouter()
  const handleClick = () => {
    push(PublicRoutes.Login)
  }
  return (
    <button onClick={handleClick} className={styles.button} >
          <span className={styles.button__icon} ><IoIosArrowDropleft/></span>
        <p className={styles.button__text} >Volver</p>
    </button>
  )
}
