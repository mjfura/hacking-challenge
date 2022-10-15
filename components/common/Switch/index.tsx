import styles from './styles.module.scss'
type Props={
    onClick:()=>void
}
export default function Switch ({ onClick }:Props) {
  return (
        <button onClick={onClick} className={styles.button} >
            <span className={styles.button__circle} ></span>
        </button>
  )
}
