import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uniq } from "uuid"
import { api } from "../api/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/user/userSlice";

function Signup() {

    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            email: "",
            password: "",
            re_password: "",
            name: "",
        }
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    let password = watch("password");
    let re_password = watch("re_password");

    
    const signup = async (data) => {
        const { email, password, re_password, name } = data;
        console.log(data)
        const username = name;

        if (true) {
            const res = await api.post("users/register",
                { email, password, username },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then((response) => {
                setError("")
                console.log(response)
                dispatch(login(response?.data?.data))
                navigate("/");
            }).catch((error) => {
                if (error.response.status === 400) {
                    setError("all fields are neccessary")
                } else if (error.response.status === 409) {
                    setError("user already exist")
                } else if (error.response.status === 500) {
                    setError("something went wrong when creating user")
                }
            })
        }
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(signup)}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="text" {...register("name", {
                                        required: true,
                                    })}
                                        id={uniq()}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="subham" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" {...register("email", {
                                        required: true,
                                        validate: {
                                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                "Email address must be a valid address",
                                        }
                                    })}
                                        id={uniq()}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                       
                                    })}
                                        id={uniq()}
                                        placeholder="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        autoComplete="new-password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="re_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password"
                                        {...register("re_password", {
                                            required: true,
                                        
                                            validate: {
                                                match: (value) => {
                                                    if (watch("password") !== value) {
                                                        setError("the password does not match")
                                                    } else {
                                                        setError(null)
                                                    }
                                                    return;
                                                }

                                            }
                                        })}
                                        id={uniq()}
                                        placeholder="Re-enter password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                {error && (<div className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{error}</div>)}
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup