import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userslice';
import { rootReducer } from './reducers';
export const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});
