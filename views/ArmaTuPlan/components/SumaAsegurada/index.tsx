import { useAppDispatch, useAppSelector } from '@/hooks'
import { disableChoqueLuzRoja, enableChoqueLuzRoja, minus, plus, selectPlan } from '@/stateManagement/redux/slices'
import { useEffect } from 'react'
import styles from './styles.module.scss'

export default function SumaAsegurada () {
  const { montoAsegurado } = useAppSelector(selectPlan)
  const dispatch = useAppDispatch()
  useEffect(() => {
    handleMontoAsegurado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [montoAsegurado])
  const handleMontoAsegurado = () => {
    if (montoAsegurado > 16000) return dispatch(disableChoqueLuzRoja())
    return dispatch(enableChoqueLuzRoja())
  }
  const handleMinus = () => {
    dispatch(minus())
  }
  const handlePlus = () => {
    dispatch(plus())
  }

  return (
        <div className={styles.container} >
            <p className={styles.container__text} >Indica la suma asegurada</p>
            <article className={styles.note} >
                <p className={styles.note__text} >MIN $12,500</p>
                <span className={styles.note__separator} ></span>
                <p className={styles.note__text} >MAX $16,500</p>
            </article>
            <div className={styles['input-suma']} >
            <span className={styles['input-suma__button']} onClick={handleMinus} >-</span>
            <input className={styles['input-suma__input']} readOnly value={'$' + montoAsegurado} type="text" />
            <span className={styles['input-suma__button']} onClick={handlePlus} >+</span>
            </div>

        </div>
  )
}
