import { getTrendingMovies, getTrendingTVShows} from "@/utils/request";
import Card from "./Components/Card";
import TvCard from "./Components/TvCard";



export default async function HomePage() {
  const movies = await getTrendingMovies();
  const tvShows = await getTrendingTVShows();

  return (
    <div>
      <div className="Container my-3">
        <h1>Top Trending Movies</h1>
        <div className="d-flex flex-wrap gap-3" >
          {movies.map(movie => {
            return <Card key={movie.id} movie={movie} /> ;
          })}
        </div>
      </div>
      <div className="Container my-3">
        <h1>Top Trending TV Shows</h1>
        <div className="d-flex flex-wrap gap-3">
          {tvShows.map(tvshow => {
            return <TvCard key={tvshow.id} tvshow={tvshow} />;
          })}
        </div>
      </div>
    </div>
  );
}
