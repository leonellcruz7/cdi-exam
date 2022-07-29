import { configureStore } from '@reduxjs/toolkit'
import idReducer from './id'

export const store = configureStore({
    reducer: {
        id: idReducer
    },
})