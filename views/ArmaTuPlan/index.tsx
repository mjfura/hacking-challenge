import Layout from '@/components/layouts'
import { useAppSelector } from '@/hooks'
import { selectPlan } from '@/stateManagement/redux/slices'
import Banner from './components/Banner'
import Footer from './components/Footer'
import PlanForm from './components/PlanForm'
import Stepper from './components/Stepper'
import styles from './styles.module.scss'
export default function ArmaTuPlan () {
  const { montoFinal } = useAppSelector(selectPlan)
  return (
    <Layout>
        <section className={styles.section} >
          <div className={styles.section__stepper} >
          <Stepper/>
          </div>
          <div className={styles.section__main} >
          <Banner/>
          <PlanForm/>
          </div>
          <div className={styles.section__footer} >
          <Footer value={montoFinal} />
          </div>
        </section>
    </Layout>
  )
}
