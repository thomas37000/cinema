// export interface IMovies {
//   movie_results: {
//     id: number;
//     original_language: string;
//     original_title: string;
//     overview: string;
//     release_date: string;
//     poster_path?: null;
//     popularity?: number;
//     title: string;
//     video: boolean;
//     vote_average?: number;
//     vote_count?: number;
//   };
// }

export interface IMovies {
  id: number;
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
