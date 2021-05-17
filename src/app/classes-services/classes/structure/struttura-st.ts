import { CarQualitySt } from "./car-quality-st"
import { TypeStrutturaSt } from "./type-struttura-st"

export class StrutturaSt {
    id: number
    struttura: string
    carQuality: CarQualitySt[]
    tipoStruttura: TypeStrutturaSt
}
