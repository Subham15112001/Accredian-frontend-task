import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    couponId:null,
}

const couponSlice = createSlice({
    name:"coupon",
    initialState,
    reducers:{
        enterCoupon : (state,action) => {
            const {couponId} = action.payload;
            state.couponId = couponId;
        },
        removeCoupon : (state,action) => {
            state.couponId = null;
        }
    }
})

export const {enterCoupon,removeCoupon} = couponSlice.actions

export default couponSlice.reducer