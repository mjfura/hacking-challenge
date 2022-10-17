import Image from 'next/image'
import Front from '../Front'
import mobileFront from '@/assets/mobileFront.svg'
import mainImgDesktop from '@/assets/mainImgDesktop.svg'
import styles from './styles.module.scss'
import { multipleStyles } from '@/utils'
import Footer from '../Footer'
export default function Banner () {
  return (
        <section className={styles.banner} >
      <div className={multipleStyles([styles.banner__img, styles['banner__img--md']])} >
          <Image src={mainImgDesktop} alt="User Rimac Desktop" />
          </div>
            <Front/>
            <div className={styles.banner__img} >
            <Image src={mobileFront} alt="User Rimac" />
            </div>
            <Footer/>
        </section>
  )
}
