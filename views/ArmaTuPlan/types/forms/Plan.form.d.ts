import { InferType } from 'yup'
import { planSchema } from '../../validators'

export type IPlanForm=InferType<typeof planSchema>
