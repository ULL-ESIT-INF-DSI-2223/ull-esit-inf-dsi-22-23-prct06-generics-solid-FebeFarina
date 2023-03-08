import { Collectable } from "./collectable";
import { Printable } from "./printable";

/**
 * Clase abstracta genérica que representa una colección
 */
export abstract class PrintableCollection<T>
  implements Collectable<T>, Printable<T>
{
  abstract collection: T[];
  /**
   * Añade un objeto a la colección
   * @param item Objeto que se desea añadir
   * @returns void
   */
  addItem(item: T): void {
    this.collection.push(item);
  }
  /**
   * A partir de un índice, recupera un objeto de la colección
   * @param index Índice del objeto
   * @returns El objeto si el índice es correcto. De no ser así, devuelve null
   */
  getItem(index: number): T | null {
    if (index < 0 || index >= this.collection.length) {
      return null;
    }
    return this.collection[index];
  }
  /**
   * Elimina un objeto de la colección a partir de un índice
   * @param index Índice del objeto
   * @returns El objeto que se eliminó. Si el índice no es correcto, devuelve null
   */
  removeItem(index: number): T | null {
    if (index < 0 || index >= this.collection.length) {
      return null;
    }
    const deleted = this.collection.splice(index, 1);
    return deleted[0];
  }
  /**
   * Devuelve el número de objetos que hay en la colleción
   * @returns Tamaño de la colección
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }
  /**
   * Método abstracto que imprime por pantalla la colección
   */
  abstract print(): void;
}
