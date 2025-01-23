import React from 'react'
import Userfooter from '../Components/UserFooter/Userfooter'
import Usernavbar from '../Components/UserNavbar/Usernavbar'
import { Outlet } from 'react-router'

function ProductRoot() {
  return (
   <>
   <Usernavbar/>
   <Outlet/>
   <Userfooter/>
   
   
   
   </>
  )
}

export default ProductRoot