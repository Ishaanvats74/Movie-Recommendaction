'use client';

import Link from 'next/link';
import React from 'react';

function TvCard({tvshow}) {
    
  return (
    <div className="h-full">
        <Link href={`/tvshow/` + tvshow.id} className="text-decoration-none h-full">
            <div className="card w-60 h-full flex flex-col">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshow.poster_path}`} alt="" className="card-img-top w-full object-cover" />
                <div className="card-body  text-lg mb-2">
                    <h5 className="card-title font-bold text-lg mb-2">{tvshow.name}</h5>
                    <p className="card-text overflow-y-auto h-40 scrollbar-hide" style={{maxHeight: "150px"}}>{tvshow.overview}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default TvCard