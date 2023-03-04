import { Media } from "./media";

export class Documentary implements Media {
  constructor(
    public name: string,
    public year: number,
    public genre: string,
    public rating: number
  ) {}
}
