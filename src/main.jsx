import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import All from './component/All.jsx';
import Add from './component/Add.jsx';
import MyItem from './component/MyItem.jsx';
import Register from './component/Register.jsx';
import LogIn from './component/LogIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Private from './component/Private.jsx';
import Update from './component/Update.jsx';
import ViewDetail from './component/ViewDetail.jsx';
import Error from './component/Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/all',
        element:<All></All>
      },
      {
        path:'/add',
        element:<Private><Add></Add></Private>
      },
      {
        path:'/my',
        element:<Private><MyItem></MyItem></Private>,
        loader : () => fetch('http://localhost:5000/add')
      },
      {
        path:'/up/:id',
        element:<Private><Update></Update></Private>,
        loader :({params})=>fetch(`http://localhost:5000/add/${params.id}`)

      },
      {
        path:'/view/:id',
        element:<Private><ViewDetail></ViewDetail></Private>,
      },
      {
        path:'/reg',
        element:<Register></Register>
      },
      {
        path:'/log',
        element:<LogIn></LogIn>
      }
     
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
