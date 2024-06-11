import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const myStore = configureStore({
    reducer: todoReducer
})