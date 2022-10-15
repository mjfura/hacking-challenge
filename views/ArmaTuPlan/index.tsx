import Layout from '@/components/layouts'
import Banner from './components/Banner'
import PlanForm from './components/PlanForm'
import Stepper from './components/Stepper'

export default function ArmaTuPlan () {
  return (
    <Layout>
        <section>
          <Stepper/>
          <Banner/>
          <PlanForm/>
        </section>
    </Layout>
  )
}
