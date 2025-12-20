import {configureStore, createSlice} from '@reduxjs/toolkit';
import React from 'react';



const textSlice = createSlice({
    name: 'text',
    initialState: {savedTxt: ''},
    reducers: {
        saveTxt: (state, action) => {
            state.savedTxt = action.payload;
        },
    },
});

export const { saveTxt } = textSlice.actions;

const store = configureStore({
    reducer: {
        text: textSlice.reducer,
    }
});

export default store;
