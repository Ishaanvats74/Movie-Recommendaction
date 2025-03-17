'use client';

import Link from "next/link"

function upcoming({upcoming}) {
  return (
    <div>
        <Link href={`/movies/` + upcoming.id} className="text-decoration-none ">
            <div className="card w-60">
                  <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${upcoming.poster_path}`} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{upcoming.name}</h5>
                    <p className="card-text overflow-y-auto h-[150px]">{upcoming.overview}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default upcoming