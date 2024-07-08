import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import   './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home,SidgnupPage,LoginPage,LogoutPage } from "./pages/indes.js";
import store from './store/store.js'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

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

// const container = document.getElementById("root");
// const root = createRoot(container); 
let persistor = persistStore(store)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <RouterProvider router={router}/>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)