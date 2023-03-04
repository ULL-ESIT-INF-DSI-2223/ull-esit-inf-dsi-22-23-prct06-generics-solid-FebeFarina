import { Media } from "./media";

export class Series implements Media {
  constructor(
    public name: string,
    public year: number,
    public genres: string[],
    public rating: number,
    public seasons: number
  ) {}
}
