import llantaRobada from '../assets/llantaRobada.svg'
import choqueLuzRoja from '../assets/choqueLuzRoja.svg'
import atropelloVia from '../assets/atropelloVia.svg'
import { Cobertura } from '../types/models'
import { TipoCobertura } from './tipoCoberturas'
export const coberturas:Cobertura[] = [
  {
    icon: llantaRobada,
    label: 'Llanta robada',
    description: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
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
