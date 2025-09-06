import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/All Products/AllProducts'
import LayOut from './components/LayOut/LayOut'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:  <LayOut />,
      children: [
        {
      path:'/',
      element: <Home />
    },

        {
      path:'/fruits',
      element: <Fruits />
    },
    {
      path:'/dairy',
      element: <Dairy />
    },
    {
      path:'/seafood',
      element: <SeaFood />
    },
     {
      path:'/allproducts',
      element: <AllProducts />
    }
      ]
    },
    
  ])
  return <RouterProvider router={router}/>
}

export default App
