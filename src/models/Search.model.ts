import { Film } from "./Films.model";

export interface Search {
  page: number,
  results: Array<Film>,
  total_pages: number,
  total_results: number
}