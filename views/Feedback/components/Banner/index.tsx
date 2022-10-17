import thanksImgMobile from '@/assets/thanksImgMobile.svg'
import thanksImgDesktop from '@/assets/thanksImgDesktop.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
export default function Banner () {
  return (
        <div className={styles.banner} >
            <div className={styles['banner__img--desktop']} >
                <Image layout='responsive' src={thanksImgDesktop} alt="Feedback Usuario Desktop" />
            </div>
            <div className={styles.banner__img} >
            <Image layout='responsive' src={thanksImgMobile} alt="Feedback Usuario" />
            </div>
        </div>
  )
}
