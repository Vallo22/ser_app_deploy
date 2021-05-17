import { CarQualityCe } from "./car-quality-ce"
import { StrutturaDueCe } from "./struttura-due-ce"

export class StrutturaTreCe {
    id: number
    strutturaTre: string
    struttura_due_id: StrutturaDueCe
    carattQualit: CarQualityCe[]
}
