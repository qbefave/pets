import React from "react";
import {useDispatch} from "react-redux";
import {AiFillDelete} from "react-icons/ai";
import {deleteHandler} from "../redux/actions"


const FavItem = ({item}) => {
    const dispatch=useDispatch();
        return(
            <li>
                <span>
                    <p> {item.title} </p>
                </span>
                <button
                    onClick={()=>dispatch(deleteHandler(item.id))}> <AiFillDelete size="20px" />
                   </button>
            </li>
        )
}

export default FavItem;