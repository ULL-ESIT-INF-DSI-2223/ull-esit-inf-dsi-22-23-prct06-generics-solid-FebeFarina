import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Documentary } from "./documentaries";
/**
 * Clase que representa una colección de documentales
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(public collection: Documentary[]) {
    super();
  }
}
