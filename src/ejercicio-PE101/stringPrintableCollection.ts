import { PrintableCollection} from "./printableCollection";
/**
 * Clase que representa una colección de strings
 */
export class StringPrintableCollection extends PrintableCollection<string> {
    /**
     * Constructor de la clase
     * @param collection Colección inicial
     */
    constructor(public collection: string[]) {
        super();
    }
    /**
     * Método que devuelve una cadena con la concatenación de todos los elementos separados por comas
     * @returns String formateada
     */
    print() {
        return this.collection.join(",");
    }
}