
import { getMoviesDetails } from "@/utils/request";
import React from "react";

async function MovieDetailsPage({params}) {
  const movieDetails = await getMoviesDetails(params.id);
  

  return (
    <div className="my-4 mx-3">
      <div className="flex align-items-center">
        <div className="">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetails.backdrop_path}`} alt="" />
        </div>
        <div className="mx-3">
          <h3>{movieDetails.title}</h3>
          <div className="flex gap-2">
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.release_date}</p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.original_language}</p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">{movieDetails.status}</p>
          </div>
          <div>
            <p>{movieDetails.genres.map(genre =>{
              return <span> {genre.name} </span>
            })} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage;