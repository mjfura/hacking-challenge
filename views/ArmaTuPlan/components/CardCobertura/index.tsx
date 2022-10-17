import Switch from '@/components/common/Switch'
import { useAppDispatch, useAppSelector, useBoolean } from '@/hooks'
import { disableAtropelloVia, disableChoqueLuzRoja, disableLLantaRobada, enableAtropelloVia, enableChoqueLuzRoja, enableLlantaRobada, selectPlan } from '@/stateManagement/redux/slices'
import { multipleStyles } from '@/utils'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { TipoCobertura } from '../../constants'
import styles from './styles.module.scss'
type Props={
    name:TipoCobertura,
    description:string,
    img:any,
    label:string
}
export default function CardCobertura ({ img, name, label, description }:Props) {
  const plan = useAppSelector(selectPlan)
  const { value: open, toggle } = useBoolean(false)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    toggle()
  }
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
                <div className={open ? styles['card__description-desktop--open'] : styles['card__description-desktop']} >
                    <p className={styles.card__text} >{description}</p>
                </div>
                </div>
            <div className={open ? styles['card__description--open'] : styles.card__description} >
                <p className={styles.card__text} >{description}</p>
            </div>
            <div onClick={handleClick} className={styles.button} >
                <p className={multipleStyles([styles.button__text, open ? styles['button__text--open'] : ' '])} >{open ? 'Ver menos' : 'Ver más'}</p>
                <span className={multipleStyles([styles.button__icon, open ? styles['button__icon--open'] : ' '])} >
                      <IoIosArrowDown/>
                </span>
            </div>
            </div>
        </div>
  )
}
