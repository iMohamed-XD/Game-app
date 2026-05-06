import useData from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image: string;
  background_image: string;
  description: string;
  reviews_count: number;
  rating: string;
  rating_top: number;
  updated: string;
  parent_platforms: { platform: Platform }[];
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
