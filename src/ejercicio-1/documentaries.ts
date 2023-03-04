import { Media } from "./media";
/**
 * Clase Documentary
 */
export class Documentary implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number
  ) {}
}
