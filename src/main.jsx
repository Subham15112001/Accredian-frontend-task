import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import   './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home,SidgnupPage,LoginPage,LogoutPage } from "./pages/indes.js";
import store from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<SidgnupPage/>
      },
      {
        path:"/logout",
        element:<LogoutPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)