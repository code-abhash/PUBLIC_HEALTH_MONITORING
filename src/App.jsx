import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Doctor from './components/Doctor'
import Home from './components/Home/Home'
import Dataentry from './components/Dataentry'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Patients from './components/Patients'
import Settings from './components/Settings'


function App() {
  

  const router=createBrowserRouter([
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/doctor',
      element:<Doctor/>
    },
    {
      path:'/nurse',
      element:<Dataentry/>
    },
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/settings',
      element:<Settings/>
    },
    {
      path:'/patients',
      element:<Patients/>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App