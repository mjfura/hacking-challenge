import { ILoginForm } from '../forms'

export type LoginRequest=Omit<ILoginForm, 'terms'>
