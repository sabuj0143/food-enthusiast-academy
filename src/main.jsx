import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ErrorPage from './ErrorPage/ErrorPage';
import Classes from './component/Classes/Classes';
import AuthProvider from './Provider/AuthProvider';
import Dashboard from './component/Dashboard/Dashboard';
import AddClass from './component/Dashboard/AddClass/AddClass';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Instructors from './component/Home/Instructors/Instructors';
import AllUsers from './component/Dashboard/AllUsers/AllUsers';
import MySelectedClass from './component/Dashboard/Student/MySelectedClass';
const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'mySelectedClass',
        element: <MySelectedClass></MySelectedClass>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl	mx-auto'>
      <AuthProvider>
        <QueryClientProvider QueryClientProvider client={queryClient} >
          <RouterProvider router={router} />
        </QueryClientProvider >
      </AuthProvider>
    </div>
  </React.StrictMode>,
)


