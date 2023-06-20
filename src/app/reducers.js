import { combineReducers } from "@reduxjs/toolkit";
import {userslice} from "../features/counter/userslice";


export const rootReducer=combineReducers({
    user:userslice.reducer,
})