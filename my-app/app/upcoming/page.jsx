
import { getUpcomingMovies } from '@/utils/request';
import ShowCard from '@/app/Components/ShowCard';


async function page({params}) {
  const { id } = await params;
  const upcomingMovies = await getUpcomingMovies({id});
  
  return (
    <div>
      <p className="text-white text-5xl mb-4">2025 Movies</p>
      <div className='flex flex-wrap gap-3 ' key={upcomingMovies.id}>
        {upcomingMovies.map(upcoming => {
          return <ShowCard key={upcoming.id} upcoming={upcoming}/>
        })};
        
      </div>
    </div>
  )
}

export default page;