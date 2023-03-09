# Práctica 6: Clases e interfaces genéricas. Principios SOLID

# Introducción

En esta práctica tendremos que resolver varios ejercicios en Typescript usando clases e interfaces genéricas. Tendremos que aplicar los principios SOLID para diseñar las clases y interfaces, además de seguir un desarrollo dirigido por pruebas. Además, usamos la herramienta Coveralls para comprobar la cobertura de los tests.

# Ejercicio 1 - DSIflix

## Enunciado

Para el primer ejercicio, se nos pide diseñar una serie de interfaces y clases que representen un servicio de video en streaming. Este servicio nos permite acceder a películas, series y documentales.

## Interfaz Streamable

En primer lugar, se nos pide crear una interfaz genérica **Streamable** que cuente con los métodos requeridos para una colección de emisiones. Siguiendo el principio de segregación de interfaces, dividiremos la interfaz en dos: **StreamableSearch** y **StreamableCollection**.

```typescript
export interface StreamableSearch<T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
  searchByRating(rating: number): T[];
}
```

La interfaz **StreamableSearch** define los métodos para buscar emisiones por nombre, año, género y rating. Cada uno de estos métodos devolverá un array de objetos de tipo **T**, siendo este el tipo de la colección.

```typescript
export interface StreamableProperties<T> {
  collection: T[];
}
```

Por otra parte, la interfaz **StreamableCollection** define un atributo **collection** de tipo **T**. Este atributo representa la colección de emisiones.

## Clase BasicStreamCollection

A continuación, se nos pide diseñar una clase abstracta genérica **BasicStreamCollection** que implemente las dos interfaces anteriores. Esta clase modelará una colección de emisiones. Se nos pide implementar alguno de los métodos definidos en las interfaces. En nuestro caso, implementaremos los métodos de **StreamableSearch**. En cambio, el atributo **collection** será abstracto, ya que lo definiremos en las subclases.

```typescript
export abstract class BasicStreamableCollection<
  T extends Film | Series | Documentary
> implements StreamableSearch<T>, StreamableProperties<T>
{
  abstract collection: T[];

  searchByName(name: string): T[] {
    return this.collection.filter((item) => item.name.includes(name));
  }

  searchByYear(year: number): T[] {
    return this.collection.filter((item) => item.year === year);
  }

  searchByGenre(genre: string): T[] {
    return this.collection.filter((item) => item.genres.includes(genre));
  }

  searchByRating(rating: number): T[] {
    return this.collection.filter((item) => item.rating === rating);
  }
}
```

Los métodos de búsqueda funcionan de forma similar: se recorre la colección y se filtran los elementos que cumplan la condición dada, devolviendo un array con los elementos que cumplen la condición.

## Clase Film, Series y Documentary

Antes de definir los distintos tipos de colecciones, definiremos las clases **Film**, **Series** y **Documentary**. Estas clases representarán las emisiones que se pueden ver en el servicio de streaming. Cada una contará con un nombre, año, géneros y puntuación. Por este motivo, definiremos una interfaz **Media** que contenga los atributos comunes a las tres clases.

### Interfaz Media

```typescript
export interface Media {
  name: string;
  year: number;
  genres: string[];
  rating: number;
}
```

A continuación, definiremos las clases **Film**, **Series** y **Documentary**. Estas clases heredarán de **Media** y añadirán los atributos propios de cada tipo de emisión. Por ejemplo, la clase **Film** tendrá un atributo **duration** que representará la duración de la película en minutos.

### Clase Film

```typescript
export class Film implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number,
    public duration: number
  ) {}
}
```

### Clase Documentary

```typescript
export class Documentary implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number
  ) {}
}
```

### Clase Series

```typescript
export class Series implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number,
    public seasons: number
  ) {}
}
```

## Clases FilmCollection, SeriesCollection y DocumentaryCollection

Por último, se nos pide diseñar tres clases que representen las colecciones de películas, series y documentales. Estas clases heredarán de **BasicStreamableCollection** y definirán el atributo **collection**.

### Clase FilmCollection

```typescript
export class FilmCollection extends BasicStreamableCollection<Film> {
  constructor(public collection: Film[]) {
    super();
  }
}
```

### Clase DocumentaryCollection

```typescript
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(public collection: Documentary[]) {
    super();
  }
}
```

### Clase SeriesCollection

```typescript
export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(public collection: Series[]) {
    super();
  }
}
```

# Ejercicio 2 - Implementación de una lista y sus operaciones

## Enunciado

Para el segundo ejercicio, se nos pide implementar una clase genérica que modele una lista de elementos de cualquier tipo. Esta clase debe implementar los siguientes métodos:

- `append`
- `concatenate`
- `filter`
- `length`
- `map`
- `reduce`
- `reverse`
- `forEach`

Todos estos métodos se tienen que implementar sin usar ninguna de las funcionalidades proporcionadas por `Array.prototype`.

## Clase myList

```typescript
export class myList<T> {
  constructor(private elements: T[]) {}
  ...
}
```

La clase **myList** recibe un array de elementos de tipo **T**. Este array representa la lista de elementos de un tipo dado.

## Método append

```typescript
 append(list: myList<T>): void {
    const index = this.length();
    for (let i = 0; i < list.length(); i++) {
      this.elements[index + i] = list.elements[i];
    }
  }
```

El método `append` recibe una lista de elementos de tipo **T**. Se recorre la lista a añadir y se agregan los elementos al final de la lista original.

## Método concatenate

```typescript
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
```

El método `concatenate` recibe un array de listas de elementos de tipo **T**. Se recorre el array de listas y se agregan los elementos al final de la lista original.

## Método filter

```typescript
  filter(predicate: (element: T) => boolean): myList<T> {
    const result = new myList<T>([]);
    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.elements[i])) {
        result.append(new myList<T>([this.elements[i]]));
      }
    }
    return result;
  }
```

El método `filter` recibe una función que recibe un elemento de tipo **T** y devuelve un booleano. Se recorre la lista y se filtran los elementos que cumplan la condición dada.

## Método length

```typescript
  length(): number {
    let result = 0;
    while (this.elements[result] != undefined) {
      result++;
    }
    return result;
  }
```

El método `length` devuelve el número de elementos de la lista, recorriendo el array de elementos hasta que se encuentre un elemento _undefined_ e incrementando el resultado.

## Método map

```typescript
  map(predicate: (element: T) => T): myList<T> {
    const result = this.elements;
    for (let i = 0; i < this.length(); i++) {
      result[i] = predicate(this.elements[i]);
    }
    return new myList(result);
  }
```

El método `map` recibe una función que recibe un elemento de tipo **T** y devuelve un elemento de tipo **T**. Se recorre la lista y se transforman los elementos según la función dada.

## Método reduce

```typescript
  reduce(predicate: (accumulator: T, element: T) => T): T {
    let result = this.elements[0];
    for (let i = 1; i < this.length(); i++) {
      result = predicate(result, this.elements[i]);
    }
    return result;
  }
```

El método `reduce` recibe una función que recibe un acumulador de tipo **T** y un elemento de tipo **T** y devuelve un elemento de tipo **T**. Se recorre la lista y se van acumulando los elementos según la función dada.

## Método reverse

```typescript
  reverse(): myList<T> {
    const result = new myList<T>([]);
    for (let i = this.length() - 1; i >= 0; i--) {
      result.append(new myList<T>([this.elements[i]]));
    }
    return result;
  }
```

El método `reverse` devuelve una lista con los elementos de la lista original en orden inverso.

## Método forEach

```typescript
  forEach(predicate: (element: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      predicate(this.elements[i]);
    }
  }
```

El método `forEach` recibe una función que recibe un elemento de tipo **T** y no devuelve nada. Se recorre la lista y se ejecuta la función dada para cada elemento.

# Ejercicio 3 - Ampliando de la biblioteca musical

## Enunciado

Para el tercer ejercicio, se nos pide ampliar la biblioteca musical de la práctica anterior. Para ello, se nos pide crear una nueva clase `Single`, la cual funciona de forma similar a la clase `Disco`, con la diferencia de que un single solo cuenta con una sola canción.

## Interfaz DiscoMetodos y DiscoPropiedades

Antes de implementar la nueva clase, definiremos dos interfaces que cuenten con los métodos y propiedades de la clase Disco, para así poder reutilizarlos en la clase Single.

### Interfaz DiscoMetodos

```typescript
export interface DiscoMetodos {
  getDuracion(): number;
  getReproducciones(): number;
}
```

### Interfaz DiscoPropiedades

```typescript
export interface DiscoPropiedades {
  nombre: string;
  publicacion: string;
}
```

Nótese que no hemos definido la propiedad `canciones`, ya que para la clase `Single` solo necesitamos una canción.

## Clase Single

```typescript
export class Single implements DiscoMetodos, DiscoPropiedades {
  constructor(
    public nombre: string,
    public publicacion: string,
    private cancion: Cancion
  ) {}
  getDuracion() {
    return this.cancion.getDuracion();
  }
  getReproducciones() {
    return this.cancion.getReproducciones();
  }
}
```

La clase `Single` implementa las interfaces `DiscoMetodos` y `DiscoPropiedades`. Además, cuenta con una propiedad `cancion` de tipo `Cancion`, que es la única canción que contiene el single. Los métodos `getDuracion` y `getReproducciones` devuelven la duración y las reproducciones de la canción, respectivamente.

## Clase Disco

```typescript
export class Disco implements DiscoMetodos, DiscoPropiedades {
  constructor(
    public nombre: string,
    public publicacion: string,
    private canciones: Cancion[]
  ) {}
  getCanciones() {
    return this.canciones;
  }
  getDuracion() {
    let duracion = 0;
    this.canciones.forEach((cancion) => {
      duracion += cancion.getDuracion();
    });
    return duracion;
  }
  getReproducciones() {
    let reproducciones = 0;
    this.canciones.forEach((cancion) => {
      reproducciones += cancion.getReproducciones();
    });
    return reproducciones;
  }
}
```

La única modificación que hemos hecho para la clase `Disco` es incluir a las dos interfaces que hemos definido anteriormente.

## Clase Discografía

Adicionalmente, nos piden implementar la ya definida clase `Discografía` como una clase genérica, de forma que pueda contener tanto discos como singles.

```typescript
export class Discografia<T extends Disco | Single> {
  constructor(private discos: T[]) {}
  getDiscos() {
    return this.discos;
  }
  addDisco(disco: T) {
    this.discos.push(disco);
  }
}
```

La clase `Discografia` recibe un tipo genérico que extiende de `Disco` o `Single`. Esto nos permite crear instancias de la clase `Discografia` que contengan tanto discos como singles. Además, hemos cambiado el atributo `discos` para que sea de tipo `T[]`, de forma que podamos almacenar ambos tipos de datos.

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

Por último, definiremos la clase **StringPrintableCollection**, subclase de **PrintableCollection**. Esta clase modelará una colección de cadenas de texto.

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

# Conlusión

Hemos visto cómo definir interfaces y clases genéricas en TypeScript. Además, hemos visto cómo definir clases abstractas y cómo extenderlas. De la misma forma, hemos desarrollado código siguiendo los principios SOLID, los cuales nos permiten escribir código más mantenible y reutilizable. Además, las herramientas de cubrimiento de código resultan muy útiles para comprobar que nuestro código está correctamente probado.
