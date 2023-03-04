/**
 * Clase myList
 */
export class myList<T> {
  constructor(private elements: T[]) {}
  /**
   * Método que añade al final de una lista los elementos de otra
   * @param list Lista a añadir
   */
  append(list: myList<T>): void {
    const index = this.length();
    for (let i = 0; i < list.length(); i++) {
      this.elements[index + i] = list.elements[i];
    }
  }
  /**
   * Método que concatena una lista a otras
   * @param lists Lista de listas a concatenar
   * @returns Lista concatenada
   */
  concatenate(lists: myList<T>[]): myList<T> {
    const result = this.elements;
    let index = this.length();
    for (let i = 0; i < lists.length; i++) {
      for (let j = 0; j < lists[i].length(); j++) {
        result[index + j] = lists[i].elements[j];
      }
      index += lists[i].length();
    }
    return new myList(result);
  }
  /**
   * Método que filtra una lista
   * @param predicate Función que filtra la lista
   * @returns Lista filtrada
   */
  filter(predicate: (element: T) => boolean): myList<T> {
    const result = new myList<T>([]);
    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.elements[i])) {
        result.append(new myList<T>([this.elements[i]]));
      }
    }
    return result;
  }
  /**
   * Método que devuelve la longitud de una lista
   * @returns Longitud de la lista
   */
  length(): number {
    let result = 0;
    while (this.elements[result] != undefined) {
      result++;
    }
    return result;
  }
  /**
   * Método que devuelve una lista con los elementos pasados por una función
   * @param predicate Función que transforma los elementos de la lista
   * @returns Lista con los elementos transformados
   */
  map(predicate: (element: T) => T): myList<T> {
    const result = this.elements;
    for (let i = 0; i < this.length(); i++) {
      result[i] = predicate(this.elements[i]);
    }
    return new myList(result);
  }
  /**
   * Método que devuelve un acumulador resultado de aplicar una función a todos los elementos de la lista
   * @param predicate Función que reduce la lista
   * @returns Acumulador
   */
  reduce(predicate: (accumulator: T, element: T) => T): T {
    let result = this.elements[0];
    for (let i = 1; i < this.length(); i++) {
      result = predicate(result, this.elements[i]);
    }
    return result;
  }
  /**
   * Método que devuelve una lista invertida
   * @returns Lista invertida
   */
  reverse(): myList<T> {
    const result = new myList<T>([]);
    for (let i = this.length() - 1; i >= 0; i--) {
      result.append(new myList<T>([this.elements[i]]));
    }
    return result;
  }
  /**
   * Método que itera sobre una lista
   * @param predicate Función que itera sobre la lista
   */
  forEach(predicate: (element: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      predicate(this.elements[i]);
    }
  }
}
