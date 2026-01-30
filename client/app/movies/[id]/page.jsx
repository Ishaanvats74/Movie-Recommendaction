import { getMoviesDetails, getSimilarMovies } from "@/utils/request";
import Link from "next/link";
import React from "react";

async function MovieDetailsPage({params}) {
  const { id } = await params;
  const movieDetails = await getMoviesDetails(id);
  const title = movieDetails.title;
  console.log(title)
  const similarMovies = await getSimilarMovies(title);
  
  return (
      <div className="my-4 mx-3">
        <div className="flex align-items-center">
          <div>
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetails.backdrop_path}`} alt="Image not loading" />
          </div>
          <div className="mx-3">
            <p className="text-white text-5xl mb-4">{movieDetails.title}</p>
              <div className="flex gap-2">
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.release_date}</p>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.original_language}</p>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.status}</p>
              </div>
              <div>
                <div key={movieDetails.id}>
                  {movieDetails.genres.map(genres =>{
                    return (
                      <span className="py-1 px-2 me-2 bg-dark text-white  rounded" key={genres.id}>
                    {genres.name}
                    </span>
                  );
                })}
                </div>
              </div>
            <p className="text-white">{movieDetails.overview}</p>
          </div>
        </div>
          {/* similar movies */}
          {/* <div className="my-10 h-full">
            <p className="text-5xl text-white">Similar Movies</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 space-y-5" key={movieDetails.id}>
              {similarMovies.map((movie) => {
                return ( 
                  <div className="h-full" key={movie.id}>
                  <Link href={`/movies/${movie.id}`} key={movie.id} className="text-decoration-none h-full">
                    <div key={movie.id} className="card w-60 h-full flex flex-col">
                      <img  src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}  className="card-img-top w-full object-cover"/>
                        <div className="card-body">
                          <h5 className="card-title font-bold text-lg mb-2">{movie.title}</h5>
                          <p className="card-text overflow-y-auto h-40 scrollbar-hide flex-grow" style={{maxHeight: "150px"}}>{movie.overview}</p>
                        </div>
                    </div>
                  </Link>
                  </div>
              )})};
            </div>
        </div> */}
      </div>
  );
};

export default MovieDetailsPage;
