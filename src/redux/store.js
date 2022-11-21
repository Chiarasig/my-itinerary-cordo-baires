import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotelReducer'
import cityReducer from './reducers/cityReducer'

export const store = configureStore({
    reducer: {
        hotelReducer,
        cityReducer,
    }
})