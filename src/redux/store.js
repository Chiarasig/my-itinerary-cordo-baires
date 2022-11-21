import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotelReducer'
import myHotelsReducers from './reducers/myHotelsReducers'

export const store = configureStore({
    reducer: {
        hotelReducer,
        myHotelsReducers,
    }
})