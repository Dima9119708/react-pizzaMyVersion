import React from "react";
import { useSelector } from "react-redux";
import { BasketEmpty } from "../components/BasketEmpty/BasketEmpty";
import { BasketDisplay } from "../components/Basket/BasketDisplay";

export function Basket() {

    const basket = useSelector(({ basket }) => basket || [])

    return !Object.values(basket).length
           ? <BasketEmpty />
           : <BasketDisplay />
}