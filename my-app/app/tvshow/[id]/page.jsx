
import { getSimilarTvshow, getTvshowDetails } from '@/utils/request';
import Link from 'next/link';
import React from 'react';

async function TvshowDeatils({params}) {
  const { id } = await params
    const similarTvshows = await getSimilarTvshow(id);
    const tvshowDetails = await getTvshowDetails(id);

  return (
    <div className="my-4 mx-3">
        <div className='flex align-items-center'>
            <div > 
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshowDetails.backdrop_path}`} alt="Image not loading" />
            </div>
            <div className='mx-3'>
                <p className='text-white text-5xl mb-4'>{tvshowDetails.name}</p>
                <div className='flex gap-2'>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{tvshowDetails.first_air_date}</p>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{tvshowDetails.original_language}</p>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{tvshowDetails.status}</p>
                </div>
                <div>
                    <div key={tvshowDetails.id}>
                        {tvshowDetails.genres.map(genres =>{
                        return <span className="py-1 px-2 me-2 bg-dark text-white rounded" key={genres.id} >{genres.name}</span>
                        })}
                    </div>
                </div>
                <p className="text-white">{tvshowDetails.overview}</p>
            </div>
        </div>
        
             {/* similar tvshows */}
        <div className="my-10 h-full">
        <p className="text-5xl text-white">Similar tvshows</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 space-y-5" key={similarTvshows.id}>
          {similarTvshows.map((tvshow) => {
            return ( 
              <div className="h-full" key={tvshow.id}>
              <Link href={`/tvshow/${tvshow.id}`} key={tvshow.id} className="text-decoration-none h-full">
                <div key={tvshow.id} className="card w-60 h-full flex flex-col">
                  <img  src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshow.poster_path}`}  className=""/>
                  <div className="card-body">
                        <h5 className="card-title font-bold text-lg mb-2">{tvshow.name}</h5>
                        <p className="card-text overflow-y-auto h-40 scrollbar-hide flex-grow" style={{maxHeight: "150px"}}>{tvshow.overview}</p>
                  </div>
                </div>
              </Link>
              </div>
            )})};
        </div>
      </div>
    
    </div>
  )
}

export default TvshowDeatils