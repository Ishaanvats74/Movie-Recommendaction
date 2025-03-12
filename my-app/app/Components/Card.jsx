'use client';
import Link from "next/link"

function Card({movie}) {
  return (
    <div>
        <Link href={`/movies/` + movie.id} className="text-decoration-none ">
            <div className="card w-60">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text overflow-y-auto h-[150px]">{movie.overview}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card