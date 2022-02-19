import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
                </style>
                <Link to="/" className="header__store-title">
                    UA Game Store
                </Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    );
};