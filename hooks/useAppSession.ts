import { PublicRoutes } from '@/routes'
import { selectUser } from '@/stateManagement/redux/slices'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppSelector } from './useAppSelector'

export const useAppSession = () => {
  const { _id } = useAppSelector(selectUser)
  const { push } = useRouter()
  useEffect(() => {
    if (!_id)push(PublicRoutes.Login)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id])
}
