/**
 * Interfaz genérica para hacer una clase collectable
 */
export interface Collectable<T> {
    addItem(item: T): void;
    getItem(index: number): T | null;
    removeItem(index: number): T | null;
    getNumberOfItems(): number;
}