# Práctica 6: Clases e interfaces genéricas. Principios SOLID

# Introducción

# Ejercicio 1 - DSIflix

# Ejercicio 2 - Implementación de una lista y sus operaciones

# Ejercicio 3 - Ampliando de la biblioteca musical

# Ejercicio PE101 - Printable Collection

## Enunciado

Para la modificación planteada en el grupo de prácticas PE101, se nos pidió modelar las interfaces y clases para representar una colección de elementos que se pueden imprimir por pantalla.

## Interfaz Collectable

En primer lugar, se nos pide crear una interfaz genérica **Collectable** con los siguientes métodos:

- `addItem`
- `removeItem`
- `getItem`
- `getNumberOfItems`

```typescript
export interface Collectable<T> {
    addItem(item: T): void;
    getItem(index: number): T | null;
    removeItem(index: number): T | null;
    getNumberOfItems(): number;
}
```
`addItem` se encargará de incluir un objeto a la colección. `getItem` devolverá un objeto de la colección dado un índice. Si el índice es negativo o mayor que el tamaño de la colección, el método devolverá _null_. `removeItem` elimina un objeto de la colección según un índice dado. De la misma forma, devolverá null con un índice incorrecto. `getNumberOfItems` devolverá el tamaño de la colección.

## Interfaz Printable

Luego, se nos pide crear otra interfaz genérica **Printable** con un único método `print`, el cual se encargará de imprimir por pantalla la colección.

```typescript
export interface Printable<T> {
    print(): void;
}
```

## Printable Collection

Una vez implementadas las dos interfaces, se nos pide diseñar una clase abstracta genérica que represente la colección de elementos. Dicha clase tiene que implementar las dos interfaces genéricas descritas anteriormente. Definiremos cada uno de los métodos de la interfaz **Collectable**, mientras que declararemos como abstracto el método `print` de **Printable**

```typescript
export abstract class PrintableCollection<T>
  implements Collectable<T>, Printable<T>
{
  abstract collection: T[];

  addItem(item: T): void {
    this.collection.push(item);
  }

  getItem(index: number): T | null {
    if (index < 0 || index >= this.collection.length) {
      return null;
    }
    return this.collection[index];
  }

  removeItem(index: number): T | null {
    if (index < 0 || index >= this.collection.length) {
      return null;
    }
    const deleted = this.collection.splice(index, 1);
    return deleted[0];
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract print(): void;
}
```

Por otra parte, hemos definido la colección como un atributo abstracto de la clase.

## Numeric Printable Collection

A continuación, definiremos la clase **NumericPrintableCollection**, subclase de la anteriormente definida **PrintableCollection**. Esta clase modelará una colección de números.

```typescript
export class NumericPrintableCollection extends PrintableCollection<number> {
    constructor(public collection: number[]) {
        super();
    }
    print() {
        return this.collection.join(",");
    }
}
```
Para dicha clase, hemos definido el constructor y el método `print`. El método `print` devolverá una cadena de texto con los elementos de la colección separados por comas.

## String Printable Collection

Por último, definiremos la clase **StringPrintableCollection**, subclase de  **PrintableCollection**. Esta clase modelará una colección de cadenas de texto.

```typescript
export class StringPrintableCollection extends PrintableCollection<string> {
    constructor(public collection: string[]) {
        super();
    }
    print() {
        return this.collection.join(",");
    }
}
```

La clase opera de forma similar a la anterior, con la diferencia de los tipos.