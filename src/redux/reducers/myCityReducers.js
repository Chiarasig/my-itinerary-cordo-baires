import {createReducer} from "@reduxjs/toolkit"
import myCitiesActions from "../actions/myCitiesActions"

const initialState = {
    cities: [],
};

const myCitiesReducers = createReducer(initialState, (builder) => {
    builder
    .addCase(myCitiesActions.getMyCities.fulfilled, (state, action) => {
        return {...state, cities: action.payload.cities};
    })
    .addCase(myCitiesActions.deleteMyCities.fulfilled, (state, action) => {
       return {...state, cities: state.cities.filter((city) => city._id !== action.payload.idCity)};
    })
    .addCase(myCitiesActions.cargarMyCities.fulfilled, (state, action) => {
         return {...state, cities : action.payload.cities};
    })
});

export default myCitiesReducers;