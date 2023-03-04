import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Film } from "./film";
/**
 * Clase que representa una colección de películas
 */
export class FilmCollection extends BasicStreamableCollection<Film> {
  constructor(public collection: Film[]) {
    super();
  }
}
