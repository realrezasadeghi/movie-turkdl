import Repository from "@/api/repository/Repository.service"
import Category from "@/components/common/Category"
import SearchAdvanced from "@/components/modules/Home/SearchAdvanced"
import SelectedMovies from "@/components/modules/Home/SelectedMovies"
import { useEffect, useState } from "react";

export interface MovieModel {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<string>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ListMovieModel {
  page: number;
  results: Array<MovieModel>;
  total_results: number;
  total_pages: number;
}


export default function HomePage() {
  const repository = new Repository<ListMovieModel>();
  const [items, setItems] = useState<MovieModel[]>([])

  useEffect(() => {
  repository.getAll('/discover/movie').then((res) => setItems(res.results)).catch((err) => console.log(err))
  }, [])
  return (
    <div className="w-full flex flex-col gap-4">
      <Category />
      <SelectedMovies items={items} />
      <SearchAdvanced />
    </div>
  )
}