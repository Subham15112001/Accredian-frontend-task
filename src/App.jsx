import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,Footer } from "./components/index";
import { Outlet } from 'react-router';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block'>
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
