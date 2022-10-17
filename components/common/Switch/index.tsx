import styles from './styles.module.scss'
type Props={
    onChangeEnabled:()=>void,
    onChangeDisabled:()=>void,
    value:boolean
}
export default function Switch ({ value, onChangeEnabled, onChangeDisabled }:Props) {
  const handleChange = () => {
    if (!value) return onChangeEnabled()
    return onChangeDisabled()
  }

  const handleClick = () => {
    handleChange()
  }
  return (
    <button onClick={handleClick} type='button' className={[styles.switch, value && styles['switch--enabled']].join(' ')} >
      <span className={[styles.switch__icon, value && styles['switch__icon--enabled']].join(' ')} >
        <p className={styles.switch__sign} >
          {value ? '-' : '+'}
        </p>
      </span>
      <span className={[styles.switch__circle, value && styles['switch__circle--enabled']].join(' ')} >
      </span>
      <p className={[styles.switch__label, value && styles['switch__label--enabled']].join(' ')} >{value ? 'Quitar' : 'Agregar'}</p>
    </button>
  )
}
