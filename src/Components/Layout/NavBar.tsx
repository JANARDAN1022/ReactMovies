import React from 'react'

type NavBarProps = {
    length:number,
    Language: string
    setLanguage: (value: React.SetStateAction<string>) => void
    Country: string
    setCountry: (value: React.SetStateAction<string>) => void
    Genre: string
    setGenre: (value: React.SetStateAction<string>) => void
    Loading:boolean
}


const NavBar = ({Loading,Language,length,setLanguage,Country,Genre,setCountry,setGenre}:NavBarProps) => {
  return (
  
   <div className="w-full p-2 flex flex-col min-[545px]:flex-row gap-5 min-[655px]:gap-10 md:gap-20 shadow-lg z-20  items-center py-5 bg-gradient-to-r from-slate-700 to-slate-900 px-10">
    <span className='font-bold text-white underline text-xs min-[655px]:text-sm min-[930px]:text-lg'>Total Movies:-  {length}</span>

<div className="flex max-[303px]:flex-col gap-2 min-[655px]:gap-5 md:gap-10 items-center">
   <span className='italic max-[360px]:hidden font-bold text-white text-xs min-[655px]:text-sm min-[930px]:text-lg'>Filters:</span>
  
   <select
    value={Genre}
    onChange={e=>{setGenre(e.target.value)}}
    disabled={Loading}
    className='min-[930px]:px-2 py-1 text-xs min-[655px]:text-sm min-[930px]:text-lg items-center flex text-yellow-700 font-semibold'
    >
      <option value=''>Genre</option>
      <option value='Action'>Action</option>
      <option value='Adventure'>Adventure</option>
      <option value='Fantasy'>Fantasy</option>
     </select>


  
    <select
    value={Language}
    onChange={e=>{setLanguage(e.target.value)}}
    disabled={Loading}
    className='min-[930px]:px-4 py-1 text-xs min-[655px]:text-sm min-[930px]:text-lg items-center  flex text-blue-700 font-semibold'
    >
      <option value=''>Languages</option>
      <option value='English'>English</option>
      <option value='Hindi'>Hindi</option>
      <option value='Malayalam'>Malayalam</option>
      <option value='Kannada'>Kannada</option>
      <option value='Japanese'>Japanese</option>
      <option value='Chinese'>Chinese</option>
      <option value='Spanish'>Spanish</option>
      <option value='Korean'>Korean</option>
      <option value='Telugu'>Telugu</option>
      <option value='Tamil'>Tamil</option>
    </select>

    <select
    value={Country}
    onChange={e=>{setCountry(e.target.value)}}
    disabled={Loading}
    className='min-[930px]:px-2 py-1 text-xs min-[655px]:text-sm min-[930px]:text-lg items-center flex  text-green-700 font-semibold' 
   >
      <option value=''>Country</option>
      <option value='Australia'>Australia</option>
      <option value='Canada'>Canada</option>
      <option value='Germany'>Germany</option>
      <option value='France'>France</option>
      <option value='United Kingdom'>United Kingdom</option>
      <option value='Ireland'>Ireland</option>
      <option value='India'>India</option>
      <option value='Norway'>Norway</option>
      <option value='United States'>United States</option>
    </select>

  
</div>
</div>

  )
}

export default NavBar