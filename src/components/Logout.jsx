import React from 'react'
import { logout } from '../features/user/userSlice'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import  useAxiosPrivate  from "../hooks/useAxiosPrivate.js";

function Logout() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  async function logoutUser(){
  
    const response = await axiosPrivate.post("users/logout"
    ).then((value) => {
        dispatch(logout())
        navigate("/login")
       
    })
    
  }
  return (
    <>
               <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold flex justify-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Are you sure to logout?
              </h1>
                     
                <button type="button" 
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none
                                 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                                  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={logoutUser}>
                  Logout
                </button>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Logout