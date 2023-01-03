import React from "react";

function Cart(props){
    const {quantity = 0, handleBasketShow = Function.prototype} = props

    return(
        <div className="cart #e0f7fa cyan lighten-5" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    )
}

export default Cart