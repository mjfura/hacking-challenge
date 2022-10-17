import PrimaryButton from '@/components/common/Button'
import styles from './styles.module.scss'
type Props={
    value:number,
}
export default function Footer ({ value }:Props) {
  return (
        <footer className={styles.footer} >
            <div className={styles.footer__container} >
                <p className={styles.footer__price} >${value.toFixed(2)}</p>
                <p className={styles.footer__description} >MENSUAL</p>
            </div>
            <div className={styles.footer__container} >
                <PrimaryButton label="LO QUIERO" type="submit" />
            </div>
        </footer>
  )
}
