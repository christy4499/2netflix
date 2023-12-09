import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Rows.css'

 function Rows({title, fetchUrl, isposter}) {

  /* console.log(fetchUrl); */
  const [allmovie , setAllmovie] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
  const {data}= await instance.get(fetchUrl)
  setAllmovie(data.results);
  }
     console.log(allmovie)

     useEffect(()=>{
     fetchData()
    },[])
     return (
       <div className='row'>
      <h1>{title}</h1>
      <div className='movie-row'>
{
  allmovie?.map(item=>(
    <img className={`movie   ${isposter && 'movie-poster'}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="no image" />
  ))
  }
      </div>
    </div>
  )
}

export default Rows