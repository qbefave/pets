import {DELETE_FAV} from "./types";
import {ADD_FAV} from "./types";

export const deleteHandler=(id) => {
    return{
        type:DELETE_FAV,
        payload: id
    }
}
export const addHangler=(title) => {
    return{
        type:DELETE_FAV,
        payload: title
    }
}