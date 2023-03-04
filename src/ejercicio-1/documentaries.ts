import { Media } from "./media";

export class Documentary implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number
  ) {}
}
