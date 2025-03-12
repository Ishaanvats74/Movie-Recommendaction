import { getTrendingMovies } from "@/utils/request";
import Card from "./Components/Card";



export default async function HomePage() {
  const movies = await getTrendingMovies();


  return (
    <div className="Container my-3">
      <h1>Top Trending Movies</h1>
      <div className="d-flex flex-wrap gap-3">
        {movies.map(movie => {
          return <Card key={movie.id} movie={movie}> </Card>;
        })}
      </div>
    </div>
   
  );
}
