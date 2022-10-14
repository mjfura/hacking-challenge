import { InferType } from 'yup'
import { loginSchema } from '../../validators'

export type ILoginForm=InferType<typeof loginSchema>
