import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails';
import Header from '../components/Header';

const BlogPage = () => {
  const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs || []);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      setBlog(null);
      setRelatedBlogs([]);
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
        <button onClick={() => navigate(-1)}>Back</button>
        <div>
          {loading ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2>Related Blogs</h2>
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                ))
              ) : (
                <p>No related blogs found.</p>
              )}
            </div>
          ) : (
            <div>
              <p>No Blog Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
