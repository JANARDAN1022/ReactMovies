import  { Movies } from '../../Types/MoviesType'

type MoviesProps = {
    movie:Movies
}

const MoviesDisplay = ({movie}:MoviesProps) => {
  return (
    <div className='flex shadow-sm shadow-white rounded-md overflow-hidden gap-2 items-center border sm:min-w-[300px] sm:max-w-[300px] md:min-w-[200px] md:max-w-[400px] flex-col'>
    {movie.moviemainphotos && movie.moviemainphotos[0]?
        <div className='w-full relative h-[589px]'>
        <img loading='lazy' src={movie.moviemainphotos?.[0]} className="shrink-0 w-full min-h-[589px] object-cover" />     
        <div className='absolute text-white flex flex-col gap-2 items-center bottom-0 px-4 py-5 rounded-md bg-opacity-40 h-[180px] min-h-max w-full bg-gray-700'>
            
            <div className={`${movie.movietitle.length>20?'flex-col':'gap-4'} flex items-center  md:w-max w-full`}>
            <span className='text-base'>Movie Title:</span>
            <span className='font-bold underline md:text-lg'>{movie.movietitle}</span>
            </div>

            {movie.moviegenres && movie.moviegenres.length>0 &&
            <div className={`${movie.moviegenres.length>2?'flex-col':'gap-4'} flex items-center  md:w-max w-full`}>
            <span className='text-base'>Movie Genres:</span>
           <div className={`flex gap-2 items-center`}>
           {movie.moviegenres.map((genre)=>(
  <span key={movie.movietitle + movie.imdbmovieid + genre} className='font-bold  md:text-lg'>{genre} {movie.moviegenres.length>1?',':''}</span>
           ))
           }
           </div>
            </div>
                }


           </div>
        </div>
        :    
       <div className="bg-black text-xs relative h-[589px] items-center w-full text-white flex gap-2 justify-center">
         <span className='md:text-3xl'>IMG</span>
         <span className='md:text-3xl'>N/A</span>

         <div className='absolute text-white flex flex-col gap-2 items-center bottom-0 px-4 py-5 rounded-md bg-opacity-40 h-[180px] min-h-max w-full bg-gray-700'>
            
            <div className='flex items-center gap-4 md:w-max w-full'>
            <span className='text-base'>Movie Title:</span>
            <span className='font-bold underline md:text-lg'>{movie.movietitle}</span>
            </div>

            {movie.moviegenres && movie.moviegenres.length>0 &&
            <div className='flex items-center gap-4 md:w-max w-full'>
            <span className='text-base'>Movie Genres:</span>
           <div className='flex gap-2 items-center'>
           {movie.moviegenres.map((genre)=>(
  <span key={movie.movietitle  + genre} className='font-bold  md:text-lg'>{genre}</span>
           ))
           }
           </div>
            </div>
                }


           </div>

       </div>
       }
    </div>
  )
}

export default MoviesDisplay