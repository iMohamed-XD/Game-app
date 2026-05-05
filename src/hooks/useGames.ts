import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
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

interface GameResponse {
    count: number;
    results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
      return () => controller.abort();
  }, []);
  return { games, error, loading };
};

export default useGames;
