import React, {useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links'

// will be getting the whole search req. from user and then requesting for search from the server
export const Search = () => {
  const [text, setText ] = useState('New Delhi')
  const { setSearchTerm } = useResultContext();
  const [ debounceValue ] = useDebounce(text, 300);

  //action to taken everytime when debounceValue changes every 300 milisecond
  useEffect(() => {
    if(debounceValue) setSearchTerm(debounceValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 '>
      
      {/* input searchterm by user */}
      <input
        value={text}
        type='text'
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
       placeholder='🔎 Search Horizon or type URL'
       onChange={(e) => setText(e.target.value)}
      />

      {/* button to clear the text */}
      {text !=='' && (
        <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500 ' onClick={() => setText('')}>
           x
        </button>
      )}

      {/* render the Links */}
      <Links/>
    </div>
  );
};

