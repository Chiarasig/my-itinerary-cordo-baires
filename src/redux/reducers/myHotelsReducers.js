import { createReducer } from "@reduxjs/toolkit";
import myHotelsAction from "../actions/myHotelsActions";

const initialState = {
    hotels: [],
};

const myHotelsReducers = createReducer (initialState, (builder)=>{
   builder
    .addCase(myHotelsAction.getMyHotels.fulfilled, (state, action) =>{
        return {...state, hotels:action.payload.hotels};
    })
    .addCase(myHotelsAction.deleteMyHotels.fulfilled, (state, action)=>{
        return {...state, hotels:action.payload.hotels};
    })
})

export default myHotelsReducers
