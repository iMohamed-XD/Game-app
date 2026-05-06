import useData from "./useData";
import type { Genre } from "./useGenres";
import { useMemo } from "react";

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  const requestConfig = useMemo(
    () => ({
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    }),
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return useData<Game>("/games", requestConfig);
};

export default useGames;
