export interface StreamableSearch<T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
  searchByRating(rating: number): T[];
}
