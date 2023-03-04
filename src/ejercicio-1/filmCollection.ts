import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Film } from "./film";

export class FilmCollection extends BasicStreamableCollection<Film> {
  constructor(public collection: Film[]) {
    super();
  }
}
