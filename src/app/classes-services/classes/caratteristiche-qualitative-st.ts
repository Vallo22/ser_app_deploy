import { MeccanismiAssociatiSt } from "./meccanismi-associati-st";
import { ValutazionePunteggioSt } from "./valutazione-punteggio-st";

export class CaratteristicheQualitativeSt {
    id: number
    caratteristicheQualitative: string
    meccanismiAssociati: MeccanismiAssociatiSt
    valutazionePunteggio: ValutazionePunteggioSt
    abilitato: boolean
}
