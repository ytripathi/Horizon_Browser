import React, {createContext, useContext, useState} from "react";

// Will function for the results from search thus, we'll use Context
const ResultContext = createContext();
// API URL
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

// Context Provider
export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //access to the search item  
    const [searchTerm, setSearchTerm] = useState('New Delhi');    

    //getResullt() to make the API calls -> /videos, /search, /images
    const getResults = async(type) => {
      setIsLoading(true);

      //response to the searched information   
      const response = await fetch(`${baseURL}${type}`, {
        method:'GET',
        headers:{
          'X-User-Agent': 'desktop',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': '2f6fc127e7mshabedc636aca0a62p151f3fjsn6f98fc12bb9d'
        },
      });

      //get data using fetch i.e the Response
      const data = await response.json();
 
      // for news enteries, explicitly data to enteries
      console.log({type, data})
      if(type.includes('/news')) {
        setResults(data.entries);
      } else if(type.includes('/image')) {
        setResults(data.image_results);
      } else {
        setResults(data.results);
      }

      console.log(data);
      setIsLoading(false);
    };

    // return the result that just got fetched to the entire Application
    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

// Function to easily use the values from this context
export const useResultContext = () => useContext(ResultContext)