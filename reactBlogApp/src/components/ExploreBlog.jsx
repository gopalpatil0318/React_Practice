import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreBlog = ({ post }) => {
    return (
        <div className="relative max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-10 border border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex flex-col">
                <NavLink 
                    to={`/blog/${post.id}`} 
                    className="text-3xl font-bold text-blue-700 hover:text-blue-900 transition-colors duration-300"
                >
                    {post.title}
                </NavLink>
                <p className="text-gray-700 mt-2 text-lg">
                    By
                    <span className="font-bold text-gray-900"> {post.author}</span>
                    {" "} on {" "}
                    <NavLink 
                        to={`/categories/${post.category.replaceAll(" ", "-")}`} 
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-bold"
                    >
                        <span>{post.category}</span>
                    </NavLink>
                </p>
                <p className="text-gray-500 mt-1 text-sm">
                    Posted on {post.date}
                </p>

                {/* Content without the image */}
                <p className="mt-4 text-gray-800 text-lg leading-relaxed font-bold">
                    {post.content}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                        <NavLink 
                            key={index} 
                            to={`/tags/${tag.replaceAll(" ", "-")}`}
                            className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-300 font-bold"
                        >
                            #{tag}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExploreBlog;
