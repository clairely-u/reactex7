import React, {useContext} from "react";
import axios from "axios";
import OrderContext from "../context/OrderContext";

export default function Header() {
    const {order, addItem, removeItem} = useContext(OrderContext);

    return (
        <div className = "Header__body">
            <h1>Sunny Side Up</h1>
            <p>Order Count: {order.length}</p>
        </div>
    )
}