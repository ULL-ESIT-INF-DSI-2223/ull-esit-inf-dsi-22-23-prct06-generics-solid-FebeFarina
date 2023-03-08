import { PrintableCollection} from "./printableCollection";
/**
 * Clase que representa una colección de numeros
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     * Constructor de la clase
     * @param collection Colección inicial
     */
    constructor(public collection: number[]) {
        super();
    }
    /**
     * Método que devuelve una string con cada uno de los elementos separados por comas
     * @returns 
     */
    print() {
        return this.collection.join(",");
    }
}