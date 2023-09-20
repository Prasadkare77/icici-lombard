import React, { createContext, useState } from 'react'

export const AdultContext = createContext()

export const Store = (children) => {
    const [adults,setAdult] = useState([]);

    const storeAdult = (adult) => {
        console.log(adult)
        setAdult([...adults,adult])
    }
  return (
    <div>
        <AdultContext.Provider value={{adults,storeAdult}}>
            {children}
        </AdultContext.Provider>
    </div>
  )
}
