import Switch from '@/components/common/Switch'
import Image from 'next/image'
import styles from './styles.module.scss'
type Props={
    name:string,
    description:string,
    img:any,
    label:string
}
export default function CardCobertura ({ img, name, description, label }:Props) {
  console.log('name ', name)
  return (
        <div className={styles.card} >
            <figure>
            <Image src={img} alt={label} />
            </figure>
            <div className={styles.card__content} >
                <div className={styles['card__content--x']} >
            <h4 className={styles.card__label} >{label}</h4>
            <Switch onClick={() => {}} />
                </div>
            <p className={styles.card__description} >{description}</p>
            <div className={styles.button} >
                <p className={styles.button__text} >Ver más</p>
            </div>
            </div>
        </div>
  )
}
