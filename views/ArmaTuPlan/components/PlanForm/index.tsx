
import Coberturas from '../Coberturas'
import SumaAsegurada from '../SumaAsegurada'

export default function PlanForm () {
  /* const handleChangeLlanta: ChangeEventHandler<HTMLInputElement> = (e) => {
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
    } */
  return (
        <form >
            <SumaAsegurada />
            <Coberturas/>
        </form>
  )
}
