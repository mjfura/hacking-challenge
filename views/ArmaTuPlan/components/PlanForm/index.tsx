
import Coberturas from '../Coberturas'
import SumaAsegurada from '../SumaAsegurada'
import styles from './styles.module.scss'
export default function PlanForm () {
  return (
        <div className={styles.plan} >
            <SumaAsegurada />
            <Coberturas/>
        </div>
  )
}
