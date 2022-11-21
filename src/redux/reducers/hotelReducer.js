import {  createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const initialState = {
    hotels: [],
  };

const hotelReducer = createReducer (initialState, (builder) =>{
    builder
    .addCase(hotelsActions.getHotels.fulfilled, (state, action) => {
        return  {...state, hotels:action.payload.hotels}
    })
    .addCase(hotelsActions.getHotelsByName.fulfilled, (state, action)=>{
        return  {...state, hotels:action.payload.hotels}
    })
    .addCase(hotelsActions.getHotelByFilter.fulfilled, (state, action)=>{
        return  {...state, hotels:action.payload.hotels}
    })

})

export default hotelReducer