import React from "react";

const Header = () =>{
    return(
        <nav>
            <div className="nav-wrapper #00bcd4 cyan">
                <a href="#" className="brand-logo">React-Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/GlebsHub/-react-shop" target="_blank" rel ="noreferrer">React-Shop</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;