import Image from 'next/image'
import Front from '../Front'
import mobileFront from '@/assets/mobileFront.svg'
import styles from './styles.module.scss'
export default function Banner () {
  return (
        <section className={styles.banner} >
            <Front/>
            <Image className={styles.banner_img} src={mobileFront} alt="User Rimac" />
        </section>
  )
}
