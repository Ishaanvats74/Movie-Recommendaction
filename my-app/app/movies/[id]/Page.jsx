import { getMoviesDetails, getSimilarMovies } from "@/utils/request";
import React from "react";

async function MovieDetailsPage({params}) {
  const movieDetails = await getMoviesDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);
  
  return (
    <div className="my-4 mx-3">
      <div className="flex align-items-center">
        <div>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetails.backdrop_path}`} alt="Image not loading" />
        </div>
        <div className="mx-3">
          <h3>{movieDetails.title}</h3>
          <div className="flex gap-2">
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.release_date}</p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.original_language}</p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.status}</p>
          </div>
          <div>
            <p>
              {movieDetails.genres.map(genres =>{
              return (
              <span className="py-1 px-2 me-2 bg-dark text-white  rounded" key={genres.id}>
                {genres.name}
                </span>
              );
            })}; 
            </p>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
        {/* similar movies */}
        <div className="my-8">
        <h1>Similar Movies</h1>
        <div className="flex flex-wrap gap-3 mx-2" >
          {similarMovies.map((movie) => {
            return ( 
              <>
                <div key={movie.id} >
                  <img  src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}  className=""/>
                  <div className="card-body">
                        <h5 className="card-title w-54">{movie.title}</h5>
                  </div>
                </div>
              </>
            )})};
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;