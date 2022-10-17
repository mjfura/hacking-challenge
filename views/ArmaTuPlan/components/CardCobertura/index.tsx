import Switch from '@/components/common/Switch'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { disableAtropelloVia, disableChoqueLuzRoja, disableLLantaRobada, enableAtropelloVia, enableChoqueLuzRoja, enableLlantaRobada, selectPlan } from '@/stateManagement/redux/slices'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { TipoCobertura } from '../../constants'
import styles from './styles.module.scss'
type Props={
    name:'atropelloVia'|'choqueLuzRoja'|'llantaRobada',
    description:string,
    img:any,
    label:string
}
export default function CardCobertura ({ img, name, label }:Props) {
  const plan = useAppSelector(selectPlan)
  const dispatch = useAppDispatch()
  const handleChangeEnabled = () => {
    if (name === TipoCobertura.AtropelloVia) return dispatch(enableAtropelloVia())
    if (name === TipoCobertura.ChoqueLuzRoja) return dispatch(enableChoqueLuzRoja())
    if (name === TipoCobertura.RoboLlanta) return dispatch(enableLlantaRobada())
  }
  const handleChangeDisabled = () => {
    if (name === TipoCobertura.AtropelloVia) return dispatch(disableAtropelloVia())
    if (name === TipoCobertura.ChoqueLuzRoja) return dispatch(disableChoqueLuzRoja())
    if (name === TipoCobertura.RoboLlanta) return dispatch(disableLLantaRobada())
  }
  return (
        <div className={styles.card} >
            <div className={styles.card__img} >
            <Image src={img} alt={label} />
            </div>

            <div className={styles.card__content} >
                <div className={styles['card__content--x']} >
            <h4 className={styles.card__label} >{label}</h4>
            <Switch onChangeEnabled={handleChangeEnabled} onChangeDisabled={handleChangeDisabled} value={plan[name]} />
                </div>

            <div className={styles.button} >
                <p className={styles.button__text} >Ver más</p>
                <span className={styles.button__icon} >
                      <IoIosArrowDown/>
                </span>
            </div>
            </div>
        </div>
  )
}
