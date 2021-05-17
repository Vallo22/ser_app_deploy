import { AssociazioneInterventoCe } from "./associazione-intervento-ce"
import { CaratteristicheQualitativeSt } from "./caratteristiche-qualitative-st"
import { InterventoSt } from "./intervento-st"
import { StrutturaSt } from "./structure/struttura-st"

export class AssociazioneInterventoSt {
    id: number
    
    intervento: InterventoSt
    caratteristicaAssociazioneIntervento: CaratteristicheQualitativeSt
    strutturaAssociazione: StrutturaSt
    
    modicitaDiCosto: number|number[]
    efficacia: number|number[]
    supIntonacate: number|number[]
    supVista: number|number[]
    reversibilita: number|number[]
    semplicitaDiCantiere: number|number[]
    esiguitaDiIngombro: number|number[]
    totale: number[]
    variante: string
    varianti?: string[]
    maxVariante?: number
    minVariante?: number
    ante?: number
    post?: number
    prezzo: number
    prezzoSupInt: number
    prezzoEntrInt: number
    prezzoRiepilogo: number
    prezzoRiepilogoDue: number
    prezzoRiepilogoTre: number
    unitaMisura: string
    valoreCifra?: number
    costoInvestimentoTotale?: number
    passaggio: number
    ugualeA0?: boolean = false
    tipo_superficie?: number = 0
    tipo_sup?: number = 0
}
