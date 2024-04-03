import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then((data) => {
        return data.json();
      }).then((data) => {
        setMovies(data)
      }).catch((data) => {
        console.log(data)
      })
  }, [])

  return (
    <>
     <table className='table-auto'>
     <thead>
                  <tr>
                    <th className='px-4 py-2'>Id</th>
                    <th className='px-4 py-2'>Movie Name</th>
                    <th className='px-4 py-2'>CheckOut</th>
                    <th className='px-4 py-2'>Rating</th>
                  </tr>
                </thead>
          {
            movies ? movies.map((e)=>{
              return(
               
                
                <tbody>
                  <tr className='bg-gray-100'>
                    <td className='border px-4 py-2 h-12'>{e.id}</td>
                    <td className='border px-4 py-2 h-12'>{e.movie}</td>
                    <td className='border px-4 py-2 h-12'><a href={e.imdb_url} className='text-blue-500'>{e.imdb_url}</a></td>
                    <td className='border px-4 py-2 h-12'>{e.rating}</td>
                  </tr>
                </tbody>
            
              
              )
            }): "Loading..."

          }
            </table>
    </>
  )
}

export default App
