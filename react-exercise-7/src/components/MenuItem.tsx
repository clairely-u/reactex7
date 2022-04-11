import React, {useContext} from "react";
import axios from "axios";
import Item from '../models/ItemInterface';
import OrderContext from "../context/OrderContext";

interface Props {
    item: Item;
}

export default function MenuItem ({item}: Props) {
    const {order, addItem, removeItem} = useContext(OrderContext)
    return (
        <div className = "MenuItem">
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <h4>{item.calories}</h4>
            <h4>{item.price}</h4>
            <h4>{item.vegetarian}</h4>
            <button onClick={() => {addItem(item)}}></button>
        </div>
    )

}