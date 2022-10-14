import Front from '../Front'
import Header from '../Header'
import styles from './styles.module.scss'
export default function Banner () {
  return (
        <section className={styles.banner} >
            <Header/>
            <Front/>
        </section>
  )
}
