import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotelReducer'
/* import rootReducer from '../redux/reducers/rootReducers';
 */
export const store = configureStore({
    reducer: {
        hotelReducer,
    }
})