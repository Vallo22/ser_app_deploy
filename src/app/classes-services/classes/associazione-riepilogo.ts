import { AssociazioneInterventoCe } from "./associazione-intervento-ce"
import { AssociazioneInterventoSt } from "./associazione-intervento-st"

export class AssociazioneRiepilogo {
    id: number
    associazioneInterventoStrutturale: AssociazioneInterventoSt
    associazioneInterventoEnergetico: AssociazioneInterventoCe
    risparmioEuro: number
    attrezzature: string
}
