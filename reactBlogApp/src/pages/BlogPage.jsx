import React, { useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import { baseUrl } from '../baseUrl';
import Header from "../components/Header"

const BlogPage = () => {


  const [blog, setBlog] = useState(null);
  const [realtedBlogs, setRealtedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  const [laoding, setLoading] = useState(false);


  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRealtedBlogs(data.realtedBlogs);

    } catch (error) {
      console.log("Error aagaya in blog id wali call");
      setBlog(null);
      setRealtedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);


  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => navigation(-1)}
        >
          Back
        </button>
        <div>
          {
            laoding ? (<div>
              <p> Laoding </p>
            </div>) :
              blog ? (<div>
                <BlogDetails post={blog} />
                <h2>Realted Blogs</h2>
                {
                  realtedBlogs.map((post) => {
                    <div key={post.id}>
                      <BlogDetails post={post} />
                    </div>
                  })
                }
              </div>) :
                (<div>
                  <p>No Blog Found</p>
                </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default BlogPage