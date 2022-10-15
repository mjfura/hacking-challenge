import NavTab from '../NavTab'
import styles from './styles.module.scss'
import CardCobertura from '../CardCobertura'
import { coberturas } from '../../constants/coberturas'

export default function Coberturas () {
  return (
        <div className={styles.coberturas} >
            <h3 className={styles.coberturas__title} >Agrega o quita coberturas</h3>
            <NavTab/>
            <div className={styles.coberturas__list} >
            {
                coberturas.map((el, i) => (
                    <CardCobertura key={i} description={el.description} img={el.icon} label={el.label} name={el.name} />
                ))
            }
            </div>
        </div>
  )
}
