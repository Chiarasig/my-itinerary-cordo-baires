import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotelReducer'
import myHotelsReducers from './reducers/myHotelsReducers'
import cityReducer from './reducers/cityReducer'
import myCitiesReducers from './reducers/myCityReducers'
import myActivityReducers from './reducers/myActivityReducers'

export const store = configureStore({
    reducer: {
        hotelReducer,
        myHotelsReducers,
        cityReducer,
        myCitiesReducers,
        myActivityReducers,
    }
})