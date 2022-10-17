import { useCallback, useState } from 'react'

export const useBoolean = (initValue:boolean) => {
  const [value, setValue] = useState<boolean>(initValue)
  const toggle = useCallback(() => {
    setValue(prev => !prev)
  }, [])
  return {
    value,
    toggle
  }
}
