import Layout from '@/components/layouts'
import { useAppSelector, useAppSession } from '@/hooks'
import { selectPlan } from '@/stateManagement/redux/slices'
import { Banner, Footer, PlanForm, Stepper } from './components'

import styles from './styles.module.scss'
export default function ArmaTuPlan () {
  const { montoFinal } = useAppSelector(selectPlan)
  useAppSession()
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
