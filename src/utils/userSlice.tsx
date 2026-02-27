import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        id: "",
        name: "",
        role: "",
        email: "",
        password: "",
        location: ""
    },
    reducers: {
       register: (state, action) => {

       }
    }
})