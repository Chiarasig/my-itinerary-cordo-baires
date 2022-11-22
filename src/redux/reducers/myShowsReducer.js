import { createReducer } from "@reduxjs/toolkit";
import myShowsAction from "../actions/myShowsActions";

const initialState = {
    hotels: [],
};

const myShowsReducers = createReducer (initialState, (builder)=>{
    builder
     .addCase(myShowsAction.getMyShows.fulfilled, (state, action) =>{
        return {...state, hotels:action.payload.hotels};
     })
     .addCase(myShowsAction.deleteMyShows.fulfilled, (state, action) => {
        return {...state};
     })
     .addCase(myShowsAction.cargarShows.fulfilled, (state, action) =>{
        return {...state, hotels:action.payload.hotels};
     })
})

export default myShowsReducers