'use client';

import Link from 'next/link';
import React from 'react';

function TvCard({tvshow}) {
    
  return (
    <div>
        <Link href={`/tvshow/` + tvshow.id} className="text-decoration-none ">
            <div className="card w-60">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshow.poster_path}`} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tvshow.name}</h5>
                    <p className="card-text overflow-y-auto h-[150px]">{tvshow.overview}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default TvCard