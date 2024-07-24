import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='w-full flex items-center justify-center border-t border-gray-700 bg-gray-800 py-2 fixed bottom-0 shadow-md'>
      <div className='flex justify-between items-center w-11/12 max-w-4xl'>
        {/* Pagination Controls and Page Text */}
        <div className='flex items-center gap-3'>
          <button
            onClick={() => handlePageChange(page - 1)}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors duration-300 ${page > 1 ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={page <= 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors duration-300 ${page < totalPages ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>

        {/* Centered Name */}
        <p className='font-semibold text-sm text-gray-300 mx-4'>
          Made by Gopal ❤️
        </p>

        {/* Page Info */}
        <p className='font-semibold text-sm text-gray-300'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
