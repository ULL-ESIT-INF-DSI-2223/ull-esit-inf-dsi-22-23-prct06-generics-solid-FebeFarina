import { Media } from "./media";

export class Film implements Media {
  constructor(
    public name: string,
    public year: number,
    public genre: string,
    public rating: number,
    public duration: number
  ) {}
}