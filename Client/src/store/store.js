import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user.slice'
// import userReducer  from 'react';

export const store = configureStore({ 
  reducer: {
    userReducer,

  },
});
