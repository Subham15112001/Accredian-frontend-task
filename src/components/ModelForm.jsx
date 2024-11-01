import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { axiosPrivate } from "../api/axios";

function ModelForm({ isVisible, onClose }) {



    const { register, handleSubmit } = useForm({
        defaultValues: {
            code: ""
        }
    })

    const authStatus = useSelector((state) => state.user?.status)
    const [errorMessage, setErroMessage] = useState("");

    const handleCode = async (data) => {
        const couponCode = data.code;
        if (errorMessage === "successfully done"){
            return ;
        }

        if(authStatus == false){
            setErroMessage("please login");
        } 
        
        let apiResponse = await axiosPrivate.post("coupons/use-coupon",{couponCode})
                                .then(()=>{
                                    setTimeout(() => {                                    
                                        onClose()
                                    }, 2000);
                                    setErroMessage("successfully done")
                                })
                                .catch((error) => {
                                    if (error.response?.status === 401) {
                                        setErroMessage("coupon is not valid")
                                    } else if (error.response?.status === 402) {
                                        setErroMessage("coupon is not active")
                                    } else if (error.response?.status === 404) {
                                        setErroMessage("coupon is already used by you")
                                    }

                                   
                                })
                               
    }
    return (
        <>
            <div
                id="container"

                className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center border-black"
            >
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-900 rounded-xl w-1/3">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Use your Code
                    </h1>
                    <form className="space-y-4 md:space-y-6 border-black " onSubmit={handleSubmit(async (data) => {
                        handleCode(data)
                    })}>
                        <div>
                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Code</label>
                            <input
                                type="number"
                                {...register("code", {
                                    required: true,
                                })}
                                id="number"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button type="submit" className="w-full flex-1 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                            <button type="button" onClick={() => onClose()} className="w-full flex-1 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {errorMessage}
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModelForm