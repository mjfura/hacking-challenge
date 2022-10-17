
import { useAppSelector } from '@/hooks'
import { PrivateRoutes } from '@/routes'
import { selectPlan } from '@/stateManagement/redux/slices'
import { useRouter } from 'next/router'
import { FormEventHandler } from 'react'
import Coberturas from '../Coberturas'
import Footer from '../Footer'
import SumaAsegurada from '../SumaAsegurada'

export default function PlanForm () {
  const { montoFinal } = useAppSelector(selectPlan)
  const { push } = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    push(PrivateRoutes.Gracias)
  }
  return (
        <form onSubmit={handleSubmit} >
            <SumaAsegurada />
            <Coberturas/>
            <Footer value={montoFinal} />
        </form>
  )
}
