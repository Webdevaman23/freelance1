import { configureStore } from '@reduxjs/toolkit';
import authSlice from './feautred/authSlice';

const store = configureStore({
    reducer : {
        auth : authSlice.reducer
    }
})

export default store