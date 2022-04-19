import {DELETE_FAV} from "./types";

const initialState = [
    {id:0, title: 'car'},
    {id:1, title: 'cat'}
]

export const favsReduser=(state=initialState,action)=>{

    switch (action.type){
        case "DELETE_FAV":
            return state.filter(item =>item.id !== action.payload)
        case "ADD_FAV":
            return state.push(action.payload);
        default :
            return state

    }

    return state
}