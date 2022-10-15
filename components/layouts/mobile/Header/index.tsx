import Link from 'next/link'
import styles from './styles.module.scss'
import { BsTelephoneFill } from 'react-icons/bs'
export default function Header () {
  return (
        <header className={styles.header} >
            <h2 className={styles.header__title} >RIMAC</h2>
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
