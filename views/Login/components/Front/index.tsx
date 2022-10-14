import styles from './styles.module.scss'
export default function Front () {
  return (
        <div className={styles.front} >
            <h3 className={styles.front__text} >¡Nuevo!</h3>
            <h1 className={styles.front__title_color_secondary} >Seguro Vehicular</h1>
            <h2 className={styles.front__title_color_primary} >Tracking</h2>
            <p className={styles.front__paragraph} >Cuéntanos dónde le harás seguimiento a tu seguro</p>
        </div>
  )
}
