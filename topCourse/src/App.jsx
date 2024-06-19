import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { filterData, apiUrl } from "./data"
import {toast} from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data)
        console.log(data.data);
      }
      catch (error) {
        toast.error("something went wrong");
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <div>
          <Navbar />
        </div>
      
        <div>
         <Filter filterData={filterData} />
        </div>
       <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       {
          loading ? (<Spinner/>) : (<Cards  courses={courses} /> )
        }
        {/* <Cards  courses={courses} /> */}
       </div>
        
      </div>
      
    </>
  )
}

export default App
