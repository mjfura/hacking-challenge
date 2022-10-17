import { RefCallBack } from '@/hooks'
import { multipleStyles } from '@/utils'
import { ReactNode, useId } from 'react'
import { BsCheck } from 'react-icons/bs'
import styles from './styles.module.scss'
type Props={
    label:ReactNode,
    name: string,
    onChange: () => void,
    onBlur: () => void,
    value: boolean| undefined,
    ref: RefCallBack
}
export default function CheckBox ({ label, value, ...props }:Props) {
  const id = useId()
  return (
        <article className={styles.terms} >
            <input className={styles.terms__input} {...props} checked={value} id={id} type="checkbox" />
            <div className={multipleStyles([styles.terms__custom, value ? styles['terms__custom--checked'] : ''])} >
                <BsCheck size={16} color="#fff" />
            </div>
            <label className={styles.terms__label} htmlFor={id}>{label}</label>
        </article>
  )
}
