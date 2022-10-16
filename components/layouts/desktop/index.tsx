import { ReactNode } from 'react'
import Header from './Header'
import styles from './styles.module.scss'
type Props={
    children?:ReactNode
}
export default function LayoutDesktop ({ children }:Props) {
  return (
        <section className={styles.section} >
            <Header/>
            <main>
                {children}
            </main>
        </section>
  )
}
