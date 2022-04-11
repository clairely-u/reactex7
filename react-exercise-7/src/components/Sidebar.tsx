import React, {useContext} from "react";
import axios from "axios";
import OrderContext from "../context/OrderContext";
import Item from '../models/ItemInterface';


interface Props {
    item: Item;
}

export default function Sidebar() {
    const {order, addItem, removeItem} = useContext(OrderContext)

    let orderTotal = 0;
    order.forEach(item => orderTotal += item.price);


    return (
        <div className = "Sidebar__body">
        <ol>
            {order}
        </ol>
        <p>Total: {orderTotal}</p>
        </div>
    )
}