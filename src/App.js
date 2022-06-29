import React, {useState} from 'react'

import  {Navbar}  from './components/Navbar';
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

const App = () =>  {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
      <div className={darkTheme ? 'dark' : ''}>
          
          {/* Body */}
          <div className='bg-red-100 dark:bg-gray-900 min-h-screen dark:text-white '>
            
            {/* NavBar */}
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
  
            {/* Routes for Video, Search & News */}
            <Routes/>
  
            {/* Footer */}
            <Footer />
  
          </div>
      </div>
    )
  }
    
  export default App;

  // bg-red-100    dark:bg-gradient-to-r from-purple-500 to-pink-500 