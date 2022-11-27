import {createReducer} from '@reduxjs/toolkit';
import citiesActions from "../actions/citiesActions";

const initialState = {
    cities: [],
    loading: false,
    error: false,
}

const cityReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(citiesActions.getCities.fulfilled, (state, action) => {
        return {...state, cities: action.payload.cities, loading: false, error: false}
    })
    .addCase(citiesActions.getCitiesByName.fulfilled, (state, action) => {
        return {...state, cities: action.payload.cities, loading: false, error: false}
    })
    .addCase(citiesActions.getCitiesByFilter.fulfilled, (state, action) => {
        return {...state, cities: action.payload.cities, loading: false, error: false}
    })
})

export default cityReducer
