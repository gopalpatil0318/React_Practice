import { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pegination from './components/Pegination'
import { AppContext } from './context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'


function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category);

    } else {
      fetchBlogPosts(Number(page));
    }


  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />

    </Routes>
  )
}















{/* <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
<Header/>
<Blogs/>
<Pegination/>
</div> */}
export default App
