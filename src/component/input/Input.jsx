import React from 'react'

function Input({searchMovie,setsearchMovie,fetchMovieData}) {
  return (
    <div>
      <div className="input flex justify-center py-6 px-5">
        <input onChange={(e)=>setsearchMovie(e.target.value)}   className='placeholder-gray-500 rounded-l-md outline-none border-y-2 border-l-2 shadow-md border-gray-500 w-full  p-2 md:w-96 lg:w-96 bg-gray-300' type="text" placeholder='type movies name..' value={searchMovie} />
        <button onClick={fetchMovieData} className='shadow-md bg-blue-500 px-6 py-2 border-y-2 border-r-2 border-gray-500 text-white font-bold hover:bg-blue-400 rounded-r-md'>Search</button>
      </div>
    </div>
  )
}

export default Input
