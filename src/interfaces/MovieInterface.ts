export default interface IMovies {
  backdrop_path: string,
  id: string | undefined;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path?: string;
  popularity?: number;
  title: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
}