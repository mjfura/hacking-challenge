import CardPlaca from '../CardPlaca'
import styles from './styles.module.scss'
export default function Banner () {
  return (
        <aside className={styles.banner} >
            <h1 className={styles.banner__text_primary} >Mira las coberturas</h1>
            <h3 className={styles.banner__text_secondary} >Conoce las coberturas para tu plan</h3>
            <CardPlaca/>
        </aside>
  )
}
