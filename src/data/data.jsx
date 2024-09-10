import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Store = createContext()
export const Repo = ({children}) => {
      //  use state to do addtocart count and else
  const [data, setData] = useState([]);
  // use effect to get the api when web is load
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
   <Store.Provider value={data} >
    {children}
   </Store.Provider>
  )
}
