import { InterventoCe } from "./intervento-ce"
import { CaratteristicheQualitativeCe } from "./caratteristiche-qualitative-ce"
import { StrutturaTreCe } from "./structure/struttura-tre-ce"

export class AssociazioneInterventoCe {
    intervento: InterventoCe
    caratteristicaAssociazioneIntervento: CaratteristicheQualitativeCe
    strutturaAssociazione: StrutturaTreCe
    
    modicitaDiCosto: number|number[]
    efficacia: number|number[]
    supIntonacate: number|number[]
    supEvIi: number|number[]
    supIvEi: number|number[]
    reversibilita: number|number[]
    semplicitaDiCantiere: number|number[]
    esiguitaDiIngombro: number|number[]
    prezzoVista: number
    prezzoInton: number
    prezzoRiepilogo: number

    totale: number[]
    valoreCifra?: number
    varianti?: string[]
    variante: string
    tipo_superficie?: number = 0
    passaggio: number

    maxVariante?: number
    minVariante?: number
}
