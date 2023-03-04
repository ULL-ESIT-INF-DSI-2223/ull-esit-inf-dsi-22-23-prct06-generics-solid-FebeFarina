import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Series } from "./series";

export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(public collection: Series[]) {
    super();
  }
}
