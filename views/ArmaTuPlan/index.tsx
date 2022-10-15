import { useAppSelector } from '@/hooks'
import { selectUser } from '@/stateManagement/redux/slices'

export default function ArmaTuPlan () {
  const { nombre, placa, dni } = useAppSelector(selectUser)
  return (
        <section>
            <h1>Arma tu plan</h1>
            <p>{nombre}</p>
            <p>{placa}</p>
            <p>{dni}</p>
        </section>
  )
}
