import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Series } from "./series";
/**
 * Clase que representa una colección de series
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(public collection: Series[]) {
    super();
  }
}
