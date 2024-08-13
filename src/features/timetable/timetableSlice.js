import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    TimeTable: [null, null, null, null, null, null, null]
}

const timetableSlice = createSlice({
    name: "timetable",
    initialState,
    reducers: {
        updateDay: (state, action) => {
            const index = action.payload.index;
            state.TimeTable[index] = action.payload.data; 
        },
        deleteDay: (state, action) => {
            const index = action.payload.index;
            state.TimeTable[index] = null; 
        },
    }
})

export const { updateDay, deleteDay } = timetableSlice.actions;

export default timetableSlice.reducer;