import { Media } from "./media";

export class Series implements Media {
  constructor(
    public name: string,
    public year: number,
    public genre: string,
    public rating: number,
    public seasons: number
  ) {}
}
