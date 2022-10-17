import llantaRobada from '../assets/llantaRobada.svg'
import choqueLuzRoja from '../assets/choqueLuzRoja.svg'
import atropelloVia from '../assets/atropelloVia.svg'
import { Cobertura } from '../types/models'
import { TipoCobertura } from './tipoCoberturas'
export const coberturas:Cobertura[] = [
  {
    icon: llantaRobada,
    label: 'Llanta robada',
    description: 'He salido de casa',
    name: TipoCobertura.RoboLlanta
  },
  {
    label: 'Choque y/o pasarte la luz roja',
    icon: choqueLuzRoja,
    description: '...',
    name: TipoCobertura.ChoqueLuzRoja
  },
  {
    icon: atropelloVia,
    label: 'Atropello en la vía Evitamiento',
    name: TipoCobertura.AtropelloVia,
    description: '...'
  }
]
