import Image from 'next/image'
import Front from '../Front'
import mobileFront from '@/assets/mobileFront.svg'
import mainImgDesktop from '@/assets/mainImgDesktop.svg'
import styles from './styles.module.scss'
export default function Banner () {
  return (
        <section className={styles.banner} >
            <Image src={mainImgDesktop} className={styles['banner__img--lg']} alt="User Rimac Desktop" />
            <Front/>
            <Image className={styles.banner_img} src={mobileFront} alt="User Rimac" />
        </section>
  )
}
