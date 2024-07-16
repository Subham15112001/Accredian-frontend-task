import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { api } from "../api/axios";
import { login } from "../features/user/userSlice";

function Login() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Login = async (data) => {
        try {
          const {email,password} = data;
          const res = await api.post("users/login",
            {email,password},
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
          ).then((response)=>{
            navigate("/");
            dispatch(login(response?.data?.data))
          })
          
         
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(async (data) => {
                Login(data)
              })}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" 
                            {...register("email",{
                                required:true,
                                validate:{
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                      "Email address must be a valid address",
                                }
                            })} 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                       focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                       dark:focus:border-blue-500" 
                                       placeholder="name@company.com" 
                        />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                       type="password" 
                       {...register("password",{
                        required:true,
                      })} 
                      id="password" 
                      placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      />
                  </div>
                 
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                      <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login