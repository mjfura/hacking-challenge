import { ReactNode } from 'react'
import Header from './Header'
import styles from './styles.module.scss'
type Props={
    children?:ReactNode
}
export default function LayoutMobile ({ children }:Props) {
  return (
        <section className={styles.page} >
            <Header/>
            <main>{children}</main>
        </section>

  )
}
