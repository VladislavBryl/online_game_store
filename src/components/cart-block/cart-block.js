import React from "react";
import { BiCartAlt } from "react-icons/bi";
import "./cart-block.css";

export const CartBlock = () => {
    return (
        <div className="cart-block">
            <BiCartAlt size={25} className="cart-block_icon"/>
            <span className="cart-block_total-price"> 1200 грн.</span>
        </div>
    )
}

