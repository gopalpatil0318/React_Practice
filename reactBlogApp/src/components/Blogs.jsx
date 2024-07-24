import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    const { posts, loading } = useContext(AppContext);

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='w-11/12 max-w-[1200px] py-8 mt-[66px] mb-[70px]'>
                {
                    loading ? (
                      <div className='flex justify-center items-center h-[60vh]'>
                      <Spinner />
                  </div>
                    ) : (
                        posts.length === 0 ? (
                            <div className='text-center'>
                                <p>No Posts Found</p>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                {posts.map((post) => (
                                    <BlogDetails key={post.id} post={post} />
                                ))}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Blogs;
