import React,{useEffect} from 'react'
import {api} from '../api/axios'
import { useDispatch,useSelector } from "react-redux";
import { upDate } from "../features/user/userSlice";

function useRefreshToken() {
   
   const prev = useSelector((state) => state.user.userData);
   const dispatch = useDispatch();

   const refresh = async () => {

    const response = await api.get("/user/refresh-token")
  
    dispatch(upDate({...prev,accessToken : response?.data?.accessToken}))
    console.log(response)

    return response.data.accessToken
   }
   return refresh
}

export default useRefreshToken