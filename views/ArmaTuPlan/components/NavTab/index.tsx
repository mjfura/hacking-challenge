import styles from './styles.module.scss'
export default function NavTab () {
  return (
        <nav className={styles.nav} >
          <span className={styles.nav__tab.concat(' ' + styles['nav__tab--selected'])} >
                <p className={styles.nav__label.concat(' ' + styles['nav__label--selected'])} >
                Protege a tu auto
                </p>
                </span>
            <span className={styles.nav__tab} >
              <p className={styles.nav__label} >
                Protege a los que te rodean
                </p>
                </span>
            <span className={styles.nav__tab} >
              <p className={styles.nav__label} >
                Mejora tu plan
                </p>
                </span>
        </nav>
  )
}
