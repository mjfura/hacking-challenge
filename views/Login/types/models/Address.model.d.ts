import { Location } from './Location.model'

export interface Address{
    street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: Location
}
