import { FieldErrorsImpl, useAppDispatch, useAppSelector, UseFormRegister, UseFormSetValue, UseFormWatch } from '@/hooks'
import { disableChoqueLuzRoja, disableLLantaRobada, enableChoqueLuzRoja, enableLlantaRobada, minus, plus, selectPlan } from '@/stateManagement/redux/slices'
import { ChangeEventHandler, useEffect, useId } from 'react'
import { IPlanForm } from '../../types/forms'
type Props={
    register:UseFormRegister<IPlanForm>,
    errors:FieldErrorsImpl<IPlanForm>,
    setValue:UseFormSetValue<IPlanForm>,
    watch:UseFormWatch<IPlanForm>
}
export default function SumaAsegurada ({ watch }:Props) {
  const { montoAsegurado, montoFinal, llantaRobada, choqueLuzRoja } = useAppSelector(selectPlan)
  const dispatch = useAppDispatch()
  const id = useId()
  useEffect(() => {
    if (montoAsegurado > 16000) {
      dispatch(disableChoqueLuzRoja())
    } else {
      dispatch(enableChoqueLuzRoja())
    }
  }, [montoAsegurado])
  const handleMinus = () => {
    console.log('valor', watch('montoAsegurado'))
    dispatch(minus())
  }
  const handlePlus = () => {
    dispatch(plus())
  }
  const handleChangeLlanta:ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('event', e.target.checked)
    if (e.target.checked) {
      return dispatch(enableLlantaRobada())
    }
    return dispatch(disableLLantaRobada())
  }
  const handleChoqueLuzRoja: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('event', e.target.checked)
    if (e.target.checked) {
      return dispatch(enableChoqueLuzRoja())
    }
    return dispatch(disableChoqueLuzRoja())
  }
  return (
        <div>
            <p>Indica la suma asegurada</p>
            <ul>
                <li>
                    <p>
                        MIN $12,500
                    </p>
                </li>
                <li>
                    <p>
                        MAX $16,500
                    </p>
                </li>
            </ul>
            <input value={montoAsegurado} type="number" />
            <div onClick={handleMinus} >-</div>
            <div onClick={handlePlus} >+</div>
            <div>
                <input checked={llantaRobada} onChange={handleChangeLlanta} type="checkbox" name="roboLlanta" id={id + '-roboLlanta'} />
                <label htmlFor={id + '-roboLlanta'}>Robo de llantas</label>
            </div>
          <div>
              <input checked={choqueLuzRoja} onChange={handleChoqueLuzRoja} type="checkbox" name="choqueLuzRoja" id={id + '-choqueLuzRoja'} />
              <label htmlFor={id + '-choqueLuzRoja'}>Choque y/o Luz Roja</label>
          </div>
            <h1>{montoFinal}</h1>
        </div>
  )
}
