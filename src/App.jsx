import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,Footer } from "./components/index";
import { Outlet, useLocation, useNavigate } from 'react-router';
import  useAxiosPrivate  from './hooks/useAxiosPrivate';
import { useDispatch } from 'react-redux';
import { login,logout } from "./features/user/userSlice";
import useRefreshToken from "./hooks/useRefreshToken";
import axios from 'axios';

function App() {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  //const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('users/refresh-token', {
          signal: controller.signal
        }).then((value) => {
          console.log(value)
          isMounted && dispatch(login(value?.data?.data));
        })

      } catch (err) {
        if (!axios.isCancel(err)){
            dispatch(logout())
            navigate("/login")

        }      
      }
    }

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])

  return (
    <>
      <div className='h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block h-full'>
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
