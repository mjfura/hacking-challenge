import { ReactNode } from 'react'
import LayoutMobile from './mobile'

type Props={
    children?:ReactNode
}
export default function Layout ({ children }:Props) {
  return (
        <LayoutMobile>
            {
                children
            }
        </LayoutMobile>
  )
}
