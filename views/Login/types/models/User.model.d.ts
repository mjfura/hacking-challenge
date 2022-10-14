import { Address } from './Address.model'
import { Company } from './Company.model'

export interface User{
    _id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}
