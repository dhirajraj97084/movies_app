import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Input from './component/input/Input'
import Cart from './component/cart/Cart'

function App() {
  const[allMovieData,setAllMovieData]=useState([]);
  const[searchMovie,setSearchMovie]=useState('');
  const[loading,setLoading]=useState(false);
  
  const fetchMovieData= async()=>{
      try {
        setLoading(true);
        const res=await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
        const data=await res.json();
        setAllMovieData(data);
        console.log(data.search);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
  }

  return (
    <div>
      <Navbar/>
      <div className="bg">
      <Input searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
      <Cart allMovieData={allMovieData} loading={loading} />
      </div>      
    </div>
  )
}

export default App
