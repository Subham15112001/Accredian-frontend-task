import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Teachers: [],
    Students : [],
}

const listpeopleSlice = createSlice({
    name: "listpeople",
    initialState,
    reducers: {
        updateTeachers: (state, action) => {
            state.Teachers = action.payload.data;
        },
        updateStudents: (state, action) => {
            state.Students = action.payload.data
        },
        deleteTeachers : (state) => {
            state.Teachers = []
        },
        deleteStudents: (state) => {
            state.Students = []
        }
    }
})

export const { updateStudents,updateTeachers,deleteStudents,deleteTeachers } = listpeopleSlice.actions;

export default listpeopleSlice.reducer;