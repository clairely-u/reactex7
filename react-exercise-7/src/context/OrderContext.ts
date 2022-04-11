import React, {createContext} from "react";
import Item from "../models/ItemInterface";

export interface OrderContextModel {
    order: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}

const defaultValue: OrderContextModel = {
    order: [],
    addItem: () => {},
    removeItem: () => {}
}

const OrderContext = createContext(defaultValue);
export default OrderContext;