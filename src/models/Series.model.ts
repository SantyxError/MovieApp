export interface Series {
  page: number;
  results: Array<Serie>;
  total_pages: number;
  total_results: number;
}

export interface Serie {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}