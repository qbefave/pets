import {combineReducers} from "@reduxjs/toolkit";
import {favsReduser} from "./favsReduser";


export const rootReduser = combineReducers({
favs: favsReduser
})