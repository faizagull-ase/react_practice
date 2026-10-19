import {configureStore} from '@reduxjs/toolkit'
import reducer from '../counter/counter'
export const store = configureStore({
    reducer:{reducer}
})