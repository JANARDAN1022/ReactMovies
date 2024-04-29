import { useCallback, useEffect, useState } from "react";
import { Movies } from "../../Types/MoviesType";
import NavBar from "../Layout/NavBar";
import MoviesDisplay from "../Layout/MoviesDisplay";

const Home = () => {
const [Movies,setMovies] = useState<Movies[]>([]);
//const [FilteredMovies,setFilteredMovies]=useState<Movies[]>([]);
const [Language,setLanguage]=useState('');
const [Country,setCountry]=useState('');
const [Genre,setGenre]=useState('');
const [Loading,setLoading]=useState(false);


const FetchMovies = useCallback(async()=>{
  try {
    setLoading(true);
    const response = await fetch("/Movies.json");
    const data:Movies[] = await response.json();
    if(data){
      if(Language || Country || Genre){
         // Filter movies based on selected filters
         const filteredMovies:Movies[] = data.filter((movie) => {
          return (
            (!Language || movie.movielanguages.includes(Language)) &&
            (!Country || movie.moviecountries.includes(Country)) &&
            (!Genre || movie.moviegenres.includes(Genre))
          );
        });
        setMovies(filteredMovies);
        setLoading(false);
      }else{
        setMovies(data as Movies[]);
        setLoading(false);  
    }
    }else{
    setLoading(false);
     console.log('No Data');    
}  
} catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);  
}
}
,[Language,Country,Genre]);

useEffect(()=>{
FetchMovies()
},[FetchMovies]);

  return (
    <div className={`h-screen bg-gradient-to-r   from-slate-600 to-slate-800 font-bold flex flex-col`}>
    <NavBar 
    Country={Country}
    Genre={Genre}
    Language={Language}
    length={Movies.length}
    setCountry={setCountry}
    setGenre={setGenre}
    setLanguage={setLanguage}
     Loading={Loading}
    />
     <div className={`${(!Movies || Movies.length===0) && Loading?'animate-pulse ':''} grid md:pt-10 md:pb-10 md:px-5 sm:border-t md:border-none w-full min-h-[660px]   overflow-y-auto overflow-x-hidden  gap-2 sm:gap-4 min-[1140px]:grid-cols-3 sm:grid-cols-2  grid-cols-1`}>
    {Movies && Movies.length>0 && !Loading?
    Movies.map((movie)=>(
      <div key={movie.imdbmovieid + movie.movietitle} className={`h-full w-full ${Loading?'animate-pulse':''}`}>
     <MoviesDisplay movie={movie}/>
       </div>
    ))
    :  
    <div className="overflow-hidden w-screen h-screen bg-gray-900 opacity-30 animate-pulse" />
    }
    </div>
      </div>
  )
}

export default Home