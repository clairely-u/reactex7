import React, {ReactNode, useState} from "react";
import Item from "../models/ItemInterface";
import OrderContext from "./OrderContext";

interface Props {
    children: ReactNode;
}

export default function ItemContextProvider({children}: Props) {
    const [order, setOrder] = useState<Item[]>([]);

    function addItem(item: Item): void {
        setOrder(prev => [... prev, item])
    }
  
    function removeItem(id: string): void {
        /* work on this!! to get the remove thing working!!!
        setOrder(prev => [... prev.slice(0, index),
            ...prev.slice(index + 1)])
            */
    }


    return (
        <OrderContext.Provider value={{order, addItem, removeItem}}>{children}</OrderContext.Provider>
    )
}   