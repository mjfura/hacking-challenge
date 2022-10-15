import { useAppForm } from '@/hooks'
import { IPlanForm } from '../../types/forms'
import { planResolver } from '../../validators'
import SumaAsegurada from '../SumaAsegurada'

export default function PlanForm () {
  const { register, formState: { errors }, setValue, watch } = useAppForm<IPlanForm>({
    resolver: planResolver
  })
  return (
        <form >
            <SumaAsegurada watch={watch} setValue={setValue} errors={errors} register={register} />
        </form>
  )
}
