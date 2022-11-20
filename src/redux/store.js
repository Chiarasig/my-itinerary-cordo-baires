import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotelReducer'

export const store = configureStore({
    reducer: {
        hotelReducer,
    }
})