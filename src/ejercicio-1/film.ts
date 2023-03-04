import { Media } from "./media";
/**
 * Clase Film
 */
export class Film implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number,
    public duration: number
  ) {}
}
