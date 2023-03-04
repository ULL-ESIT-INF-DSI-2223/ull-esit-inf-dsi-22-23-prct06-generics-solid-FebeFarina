import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Documentary } from "./documentaries";

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(public collection: Documentary[]) {
    super();
  }
}
