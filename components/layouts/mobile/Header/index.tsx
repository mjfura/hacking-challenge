import Link from 'next/link'
import styles from './styles.module.scss'
import { BsTelephoneFill } from 'react-icons/bs'
import logoRimac from '@/assets/logoRimac.svg'
import Image from 'next/image'
export default function Header () {
  return (
        <header className={styles.header} >
            <Image src={logoRimac} alt="logo-rimac" />
            <div className={styles.header__content} >
            <p className={styles.header__note} >¿Tienes alguna duda?</p>
            <Link href="/" >
                <a className={styles.header__link}>
                    <span className={styles.header__icon} >
                        <BsTelephoneFill />
                    </span>
                    <p className={styles.header__text} >Llámanos</p>
                    <p className={styles['header__text--md']} >(01) 411 6001</p>
                </a>
            </Link>
            </div>
        </header>
  )
}
