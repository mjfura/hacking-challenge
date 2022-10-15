import { useState } from 'react'

export const useBoolean = (initValue:boolean) => {
  const [value, setValue] = useState<boolean>(initValue)
  const toggle = () => {
    setValue(prev => !prev)
  }
  return {
    value,
    toggle
  }
}
