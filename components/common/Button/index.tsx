import styles from './styles.module.scss'
type Props={
    label:string,
    type:'button' | 'submit' | 'reset' | undefined,
    onClick?:()=>void
}
export default function PrimaryButton ({ onClick, label, type }:Props) {
  return (
        <button onClick={onClick} className={styles.button} type={type}>
            <p className={styles.button__label} >
            {label}
            </p>
        </button>
  )
}
