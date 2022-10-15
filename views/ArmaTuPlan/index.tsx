import { useAppSelector } from '@/hooks'
import { selectUser } from '@/stateManagement/redux/slices'

export default function ArmaTuPlan () {
  const { modelo, placa, year, marca } = useAppSelector(selectUser)
  return (
        <section>
            <h1>Mira las coberturas</h1>
            <h3>Conoce las coberturas para tu plan</h3>
            <p>{placa}</p>

            <p>{marca}</p>
            <p>{modelo}</p>
            <p>{year}</p>
            <p>Indica la suma asegurada</p>
        </section>
  )
}
