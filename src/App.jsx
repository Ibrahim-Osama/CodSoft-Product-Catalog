import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'
import { DataContext } from './Context/DataContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProdectDetails from './Components/Prodect_Details/ProdectDetails'
import Cart from './Components/Cart/Cart'



function App()
{
 let [details , setdetails] = useState([])
  let routes =createBrowserRouter(
    [{path:'/' ,element:<Nav/>, children:
    [
      {
      index:true,
      element:<Home/>
    },
      {
      path:'ProdectDetails/:id',
      element:<ProdectDetails/>
    },
      {
      path:'Cart',
      element:<Cart/>
    }
  
  
  ]}])




  return <DataContext>
   <RouterProvider router={routes}>
   
    <Nav/>
   <Home/>
 
  </RouterProvider>
  </DataContext>
  

    
  
}

export default App
