import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,
    rank : "STUDENT"
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout:(state,action) => {
            state.status = false;
            state.userData = null;
        },
        upDate:(state,action) => {
            state.userData = action.payload
        },
        updateRank:(state,action)=> {
            state.rank = action.payload
        }
    }
})

export const {login,logout,upDate} = userSlice.actions;

export default userSlice.reducer;