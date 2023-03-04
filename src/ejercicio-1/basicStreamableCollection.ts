import { StreamableSearch } from "./streamableSearch";
import { StreamableProperties } from "./streamableProperties";
import { Film } from "./film";
import { Series } from "./series";
import { Documentary } from "./documentaries";
/**
 * Clase abstracta que representa una colección de objetos streamables
 */
export abstract class BasicStreamableCollection<
  T extends Film | Series | Documentary
> implements StreamableSearch<T>, StreamableProperties<T>
{
  abstract collection: T[];
  /**
   * Búsqueda por nombre
   * @param name Nombre a buscar
   * @returns Medio con el nombre buscado
   */
  searchByName(name: string): T[] {
    return this.collection.filter((item) => item.name.includes(name));
  }
  /**
   * Búsqueda por año
   * @param year Año a buscar
   * @returns Medio con el año buscado
   */
  searchByYear(year: number): T[] {
    return this.collection.filter((item) => item.year === year);
  }
  /**
   * Búsqueda por género
   * @param genre Género a buscar
   * @returns Medio con el género buscado
   */
  searchByGenre(genre: string): T[] {
    return this.collection.filter((item) => item.genres.includes(genre));
  }
  /**
   * Búsqueda por rating
   * @param rating Calificación a buscar
   * @returns Medio con la calificación buscada
   */
  searchByRating(rating: number): T[] {
    return this.collection.filter((item) => item.rating === rating);
  }

}
