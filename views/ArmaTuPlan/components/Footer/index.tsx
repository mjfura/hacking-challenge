import PrimaryButton from '@/components/common/Button'
import { PrivateRoutes } from '@/routes'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'
import Note from '../Note'
type Props={
    value:number,
}
export default function Footer ({ value }:Props) {
  const { push } = useRouter()
  const handleClick = () => {
    push(PrivateRoutes.Gracias)
  }
  return (
        <footer className={styles.footer} >
            <div className={styles.footer__container} >
                <p className={styles.footer__label} >Monto</p>
                <p className={styles.footer__price} >${value.toFixed(2)}</p>
                <p className={styles.footer__description} >MENSUAL</p>
            </div>
            <div className={styles.footer__container} >
                <div className={styles.footer__note} >
                    <Note/>
                </div>
                <PrimaryButton onClick={handleClick} label="LO QUIERO" type="button" />
            </div>
        </footer>
  )
}
