import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        fullname: "",
        username: "",
        email: "",
        password: "",
        comment: "",
        description: "",
        image: ""
    },

    reducers: {
        enterFullname: (state, action) => {state.fullname = action.payload},
        enterUsername: (state, action) => {state.username = action.payload},
        enterEmail: (state, action) => {state.email = action.payload},
        enterPassword: (state, action) => {state.password = action.payload},
        enterComment:(state, action) => {state.comment = action.payload},
        enterDescription: (state, action) => {state.description = action.payload},
        enterImage: (state, action) => {state.image = action.payload}
    }
});

export const reducer = rootSlice.reducer;

export const {enterFullname, enterUsername, enterEmail, enterPassword, enterComment, enterDescription, enterImage} = rootSlice.actions