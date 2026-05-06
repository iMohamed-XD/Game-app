import type { GameQuery } from "@/App";
import useData from "./useData";
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
  background_image: string | null;
  description: string;
  reviews_count: number;
  rating: string;
  rating_top: number;
  updated: string;
  parent_platforms: { platform: Platform }[];
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const requestConfig = useMemo(
    () => ({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
      },
    }),
    [gameQuery]
  );

  return useData<Game>("/games", requestConfig);
};

export default useGames;
