
import { getUpcomingMovies } from '@/utils/request';
import ShowCard from '@/app/Components/ShowCard';


async function page({params}) {
  const { id } = await params;
  const upcomingMovies = await getUpcomingMovies({id});
  
  return (
    <div>
      <h2>2025 Movies</h2>
      <div className='flex flex-wrap gap-3 '>
        {upcomingMovies.map(upcoming => {
          return <ShowCard key={upcoming.id} upcoming={upcoming}/>
        })};
        
      </div>
    </div>
  )
}

export default page;