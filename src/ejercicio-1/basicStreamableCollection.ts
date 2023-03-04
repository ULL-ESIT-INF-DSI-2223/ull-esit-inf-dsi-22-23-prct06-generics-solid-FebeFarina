import { StreamableSearch } from "./streamableSearch";
import { StreamableProperties } from "./streamableProperties";
import { Film } from "./film";
import { Series } from "./series";
import { Documentary } from "./documentaries";

export abstract class BasicStreamableCollection<
  T extends Film | Series | Documentary
> implements StreamableSearch<T>, StreamableProperties<T>
{
  abstract collection: T[];
  searchByName(name: string): T[] {
    return this.collection.filter((item) => item.name.includes(name));
  }
  searchByYear(year: number): T[] {
    return this.collection.filter((item) => item.year === year);
  }
  searchByGenre(genre: string): T[] {
    return this.collection.filter((item) => item.genres.includes(genre));
  }
  searchByRating(rating: number): T[] {
    return this.collection.filter((item) => item.rating === rating);
  }
}
