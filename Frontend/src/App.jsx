
import { createBrowserRouter,  RouterProvider } from 'react-router'
import './App.css'
import ROUTES from './Router/Productrouter'

let router=createBrowserRouter(ROUTES)

function App() {
 

  return (
    <>

    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
