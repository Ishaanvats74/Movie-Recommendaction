'use client';

import Link from "next/link"

function Card({movie}) {
  return (
    <div className="h-full ">
        <Link href={`/movies/` + movie.id} className="text-decoration-none h-full">
            <div className="card w-60 h-full flex flex-col">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" className="card-img-top w-full object-cover" />
                <div className="card-body ">
                    <h5 className="card-title font-bold text-lg mb-2">{movie.title}</h5>
                    <p className="card-text overflow-y-auto h-40 scrollbar-hide" style={{maxHeight: "150px"}}>{movie.overview}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card;