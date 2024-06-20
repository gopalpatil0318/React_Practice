import React from 'react'

const Card = ({article}) => {
   

    if (!article) {
        return null; 
      }

  return (
    <div className='w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden'>
    <div className='relative'>
      <img src={article.urlToImage} alt={article.title}  />

    </div>
    <div className='p-4'>
      <p className="text-white font-semibold text-lg leading-6">{article.title}</p>
      <p className='mt-4 text-white '>
      {article.description
            ? article.description.length > 60 
              ? article.description.substr(0, 60) + "..." 
              : article.description
            : 'No Description'}
        </p>
    </div>
    <div className='mb-3 mr-3 flex justify-end'>
          <button className='bg-transparent hover:bg-blue-950 text-blue-900 font-semibold hover:text-white py-1 px-2 border border-blue-900 hover:border-transparent rounded'>
            Read More...
          </button>
        </div>
  </div>
  )
}

export default Card