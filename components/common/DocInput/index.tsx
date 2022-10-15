import { HTMLInputTypeAttribute } from 'react'
import Input from '../Input'
import { RefCallBack } from '@/hooks'
import styles from './styles.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
type Props={
    type: HTMLInputTypeAttribute,
    name: string,
    onChange: () => void,
    onBlur: () => void,
    value: number | string | undefined,
    ref: RefCallBack
}
export default function DocInput (props:Props) {
  return (
        <div className={styles.input} >
            <button className={styles.input__type} type="button" >
                <p className={styles.input__text} >DNI</p>
                <span className={styles.input__icon} >
                  <IoIosArrowDown />
                </span>
            </button>
            <Input {...props} placeholder="Nro de doc" />
        </div>
  )
}
