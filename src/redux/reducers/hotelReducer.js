import {  createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const initialState = {
    hotels: [],
  };

const hotelReducer = createReducer (initialState, (hotel) =>{
    hotel.addCase(hotelsActions.getHotels.fulfilled, (state, action) => {
        console.log(action.payload)
        console.log(hotel)
        return  {...state, hotel:action.payload.hotels}
    })
    hotel.addCase(hotelsActions.getHotelsByName.fulfilled, (state, action)=>{
        console.log(action.payload)
        return  {...state, hotel:action.payload.hotels}
    })
    hotel.addCase(hotelsActions.getHotelByFilter.fulfilled, (state, action)=>{
        console.log(action.payload)
        console.log(hotel)
        return  {...state, hotel:action.payload.hotels}
    })

})

export default hotelReducer