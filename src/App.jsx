import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,Footer } from "./components/index";
import { Outlet, useLocation, useNavigate } from 'react-router';
import  useAxiosPrivate  from './hooks/useAxiosPrivate';
import { useDispatch } from 'react-redux';
import { login,logout } from "./features/user/userSlice";


function App() {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users/refresh-token', {
          signal: controller.signal
        }).then((value) => {
          console.log(value.data);
          isMounted && dispatch(login(value?.data?.data));
        })
        
      } catch (err) {
        if (err.name !== "CanceledError"){
          dispatch(logout())
          console.log(err);
          navigate('/login');
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
