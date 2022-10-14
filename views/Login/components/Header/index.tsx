import Link from 'next/link'
import styles from './styles.module.scss'
import { BsPhone } from 'react-icons/bs'
export default function Header () {
  return (
        <header className={styles.header} >
            <h2 className={styles.header__title} >RIMAC</h2>
            <Link href="/" >
            <a className={styles.header__link}>
                <span>
                    <BsPhone/>
                </span>
                <p>Llámanos</p>
            </a>
            </Link>
        </header>
  )
}
