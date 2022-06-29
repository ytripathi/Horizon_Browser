import React from 'react'
import { Link } from 'react-router-dom'

import { Search } from './Search'

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-red-500 border-red-200'>
      
      <div className='flex justify-between items-center space-x-5 w-screen'>
        {/* Horizon Icon-Navbar */}
         <Link to="/">
           <p className='text-2xl bg-yellow-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
              Horizon
             <span role="img" aria-label="horizon">🌅</span>
           </p>
         </Link>

         {/* Button to change the theme */}
         <button type="button" onClick={ () => setDarkTheme(!darkTheme) }  className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
             {darkTheme ? 'Light 🌞' : '🌛 Dark'}
           </button>

      </div>

      {/* Search Division */}
      <Search/>
      
    </div>
  )
}

