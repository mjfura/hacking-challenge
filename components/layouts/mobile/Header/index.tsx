import Link from 'next/link'
import styles from './styles.module.scss'
import { BsTelephoneFill } from 'react-icons/bs'
import logoRimac from '@/assets/logoRimac.svg'
import Image from 'next/image'
export default function Header () {
  return (
        <header className={styles.header} >
            <Image src={logoRimac} alt="logo-rimac" />
            <Link href="/" >
                <a className={styles.header__link}>
                    <span className={styles.header__icon} >
                        <BsTelephoneFill />
                    </span>
                    <p className={styles.header__text} >Llámanos</p>
                </a>
            </Link>
        </header>
  )
}
