import { getSimilarTvshow, getTvshowDetails } from '@/utils/request';
import React from 'react'

async function TvshowDeatils({params}) {
    const similarTvshows = await getSimilarTvshow(params.id);
    const tvshowDetails = await getTvshowDetails(params.id);

  return (
    <div className="my-4 mx-3">
        <div className='flex align-items-center'>
            <div > 
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshowDetails.backdrop_path}`} alt="Image not loading" />
            </div>
            <div className='mx-3'>
                <h3>{tvshowDetails.name}</h3>
                <div className='flex gap-2'>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{tvshowDetails.first_air_date}</p>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{tvshowDetails.original_language}</p>
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">{tvshowDetails.status}</p>
                </div>
                <div>
                    <p>
                        {tvshowDetails.genres.map(genres =>{
                        return <span className="py-1 px-2 me-2 bg-dark text-white  rounded" key={genres.id} >{genres.name}</span>
                        })}
                    </p>
                </div>
                <p>{tvshowDetails.overview}</p>
            </div>
        </div>
        
             {/* similar tvshows */}
        <div className="my-8">
        <h1>Similar tvshows</h1>
        <div className="flex flex-wrap gap-3 mx-2" >
          {similarTvshows.map((tvshow) => {
            return ( 
              <>
                <div key={tvshow.id} >
                  <img  src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshow.poster_path}`}  className=""/>
                  <div className="card-body">
                        <h5 className="card-title w-54">{tvshow.name}</h5>
                  </div>
                </div>
              </>
            )})};
        </div>
      </div>
    
    </div>
  )
}

export default TvshowDeatils