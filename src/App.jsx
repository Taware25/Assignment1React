import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'



const routers = createBrowserRouter([
  {path: '/' , element: <Layout/>, children: [
    {index: true , element: <Home/>},
    {path: '/about' , element: <About/>},
    {path: '/portfolio' , element: <Portfolio/>},
    {path: '/contact' , element: <Contact/>},
    {path: '*' , element: <NotFound/>}
  ]},
])


function App() {
  const [count, setCount] = useState(0)

  return <>

    <RouterProvider router={routers}></RouterProvider>

  </>
  
}

export default App
