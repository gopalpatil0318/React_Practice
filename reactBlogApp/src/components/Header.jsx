import React, { useEffect, useState } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full py-3 fixed top-0 bg-gray-900 text-white z-50 border-b border-gray-700 transition-shadow duration-300 ${scrolled ? 'shadow-lg bg-gray-800' : 'shadow-md'}`}>
            <header className='text-center'>
                <h1 className='text-3xl font-bold uppercase transition-transform duration-300 transform hover:scale-105 hover:text-blue-400'>
                    New Trends Bulletin
                </h1>
            </header>
        </div>
    );
};

export default Header;
