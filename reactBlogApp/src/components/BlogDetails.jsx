import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
    return (
        <div className="relative max-w-4xl mx-auto p-6 bg-gray-800 shadow-lg rounded-lg mb-10 border border-gray-700">
            <div className="flex flex-col">
                <NavLink 
                    to={`/blog/${post.id}`} 
                    className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                    {post.title}
                </NavLink>
                <p className="text-gray-400 mt-2">
                    By{" "}
                    <span className="font-medium text-gray-300">{post.author}</span>
                    {" "} on {" "}
                    <NavLink 
                        to={`/categories/${post.category.replaceAll(" ", "-")}`} 
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        <span>{post.category}</span>
                    </NavLink>
                </p>
                <p className="text-gray-500 mt-1">
                    Posted on {post.date}
                </p>

                <p className="mt-4 text-gray-200">{post.content}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                        <NavLink
                            key={index}
                            to={`/tags/${tag.replaceAll(" ", "-")}`}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                        >
                            #{tag}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* Button placed below tags */}
            <div className="flex justify-end mt-4">
                <NavLink
                    to={`/blog/${post.id}`}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-400 transition-colors duration-300'
                >
                    Explore
                </NavLink>
            </div>
        </div>
    );
};

export default BlogDetails;
