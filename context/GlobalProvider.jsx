import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentUser } from '../lib/appwrite';


const GlobalContext =createContext();

export const useGlobalContext = ()=> useContext(GlobalContext);



const GlobalProvider = ({children}) => {

const [isLoggedIn,setIsLoggedIn] =useState(false);
const [user,setUser] =useState(null);
const [isLoadding,setIsLoadding] =useState(true);

useEffect(() => { 
    
getCurrentUser().then((res) => { 
if(res){
    setIsLoadding(true);
    setUser(res)
}else{
    setIsLoadding(false);
    setUser(null)
}
 })
 .catch((error) => { 
    console.log(error)
  })
.finally( () => { 
        setIsLoadding(false)
     })  


 },[])


  return (
  <GlobalContext.Provider value={{
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    isLoadding,
  }} >

{children}

  </GlobalContext.Provider>
  )
}

export default GlobalProvider