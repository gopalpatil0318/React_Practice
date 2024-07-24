import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pegination from '../components/Pegination'; // Fixed the typo in the component name
import Blogs from '../components/Blogs';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className="min-h-screen flex flex-col className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white'">
            <Header />

            <main className="flex-grow p-6 mt-10">
                <div className="flex justify-center items-center p-4">
                    <button
                        onClick={() => navigate(-1)}
                         className='border-2 px-4 py-1 rounded-md  mx-10 text-white'
                    >
                        Back
                    </button>
                    <h2 className="text-2xl font-bold text-white">
                        Blogs on <span className="text-blue-600">{category}</span>
                    </h2>
                </div>

                <Blogs />
                <Pegination />
            </main>
        </div>
    );
};

export default CategoryPage;
