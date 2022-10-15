import { HTMLInputTypeAttribute } from 'react'
import { RefCallBack } from '@/hooks'
import styles from './styles.module.scss'
type Props={
    placeholder:string,
    type: HTMLInputTypeAttribute,
    name:string,
    onChange:()=>void,
    onBlur:()=>void,
    value:number|string|undefined,
    ref:RefCallBack
}
export default function Input ({ placeholder, type, name, value, onChange, onBlur, ref }:Props) {
  return (
        <input name={name} className={styles.input} ref={ref} onChange={onChange} onBlur={onBlur} value={value} placeholder={placeholder} type={type} />
  )
}
