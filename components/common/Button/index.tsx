import styles from './styles.module.scss'
type Props={
    label:string,
    type:'button' | 'submit' | 'reset' | undefined,
    onClick?:()=>void
}
export default function PrimaryButton ({ label, type }:Props) {
  return (
        <button className={styles.button} type={type}>
            <p className={styles.button__label} >
            {label}
            </p>
        </button>
  )
}
