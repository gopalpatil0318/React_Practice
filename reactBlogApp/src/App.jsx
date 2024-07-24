import { useContext, useEffect, useState } from 'react'
import { AppContext } from './context/AppContext'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import SplashScreen from './components/SplashScreen';
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'


function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  const [sloading, setSloading] = useState(true);
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


  }, [location.pathname, location.search]);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setSloading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {
        sloading ? (<SplashScreen />) :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:blogId" element={<BlogPage />} />
              <Route path="/tags/:tag" element={<TagPage />} />
              <Route path="/categories/:category" element={<CategoryPage />} />

            </Routes>
          )
      }
    </>
  )
}















{/* <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
<Header/>
<Blogs/>
<Pegination/>
</div> */}
export default App
