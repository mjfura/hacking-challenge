import thanksImgMobile from '@/assets/thanksImgMobile.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
export default function Banner () {
  return (
        <div className={styles.banner} >
            <Image layout='responsive' src={thanksImgMobile} alt="Feedback Usuario" />
        </div>
  )
}
