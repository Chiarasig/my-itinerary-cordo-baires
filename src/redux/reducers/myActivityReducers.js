import {createReducer} from "@reduxjs/toolkit"
import myActivityActions from "../actions/myActivityActions"

const initialState = {
    cities: [],
};

const myActivityReducers = createReducer(initialState, (builder) => {
    builder
    .addCase(myActivityActions.getMyActivity.fulfilled, (state, action) => {
        return {...state, cities: action.payload.cities};
    })
    .addCase(myActivityActions.deleteMyActivity.fulfilled, (state, action) => {
        console.log(action.payload);
        return {...state, cities: state.cities.filter((city) => city._id !== action.payload.date)};
    })
    .addCase(myActivityActions.cargarActivity.fulfilled, (state, action) => {
        return {...state, cities: action.payload.cities};
    })
});

export default myActivityReducers;