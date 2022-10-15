import { HTMLInputTypeAttribute } from 'react'

type Props={
    placeholder:string,
    type: HTMLInputTypeAttribute
}
export default function Input ({ placeholder, type }:Props) {
  return (
        <input placeholder={placeholder} type={type} />
  )
}
