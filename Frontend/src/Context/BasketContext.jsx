import React, { createContext, useEffect, useState } from 'react'

export let BasketContext=createContext()

function BasketPrivoder({children}) {


    let basketdata=JSON.parse(localStorage.getItem("basket"))

    let [basket,setBasket]=useState(basketdata ?basketdata : [])


    useEffect(()=>{

        localStorage.setItem("basket",JSON.stringify(basket))
    },[basket])


    let value={

        basket,
        setBasket
    }
  return (
    <>

    <BasketContext.Provider value={value}>
        {children}
    </BasketContext.Provider>
    
    
    
    </>
  )
}

export default BasketPrivoder