import React from 'react'
import { Card } from './Card'

export const CardList = ({data}) => {

//   async function getpokemonImage(name){
//     try {
//       const response = await fetch(
//           `https://img.pokemondb.net/artwork/large/${name}.jpg`
//       );
//       const res = await response.json();
//       setData((prevData) => {
//           return [...prevData, ...res.results];
//       });
//       console.log(data);
//       setPage((prevPage) => prevPage + 1);
//     } catch (error) {
//         setError(error);
//     } 
//   }

  return (
    <div className='p-10 flex flex-wrap justify-around gap-8'>
      {
        data.map((ele, index)=>{
         return  <Card key={index} name={ele.name} url={ele.url}/>
        })
      }
    </div>
  )
}
