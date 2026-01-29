import { getTrendingMovies, getTrendingTVShows} from "@/utils/request";
import Card from "./Components/Card";
import TvCard from "./Components/TvCard";



export default async function HomePage() {
  const movies = await getTrendingMovies();
  const tvShows = await getTrendingTVShows();

  return (
    <div>
      <div className="Container my-3">
        <p className="text-white text-5xl mb-4">Top Trending Movies</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 space-y-5 " key={movies.id}>
          {movies.map(movie => {
            return <Card key={movie.id} movie={movie} /> ;
          })}
        </div>
      </div>
      <div className="Container my-3">
        <p className="text-white text-5xl mb-4">Top Trending TV Shows</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 space-y-5" key={tvShows.id}>
          {tvShows.map(tvshow => {
            return <TvCard key={tvshow.id} tvshow={tvshow} />;
          })}
        </div>
      </div>
    </div>
  );
}



