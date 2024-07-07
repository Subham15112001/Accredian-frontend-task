import {configureStore} from '@reduxjs/toolkit'
import couponSlice from '../features/coupon/couponSlice'
import userSlice from '../features/user/userSlice'
const store = configureStore({
    reducer: {
        coupon : couponSlice,
        user : userSlice
    }
});

export default store;