import React from "react";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeOrder = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype
    } = props;

    return (
        <li className="collection-item">
            {name}
            <i className='material-icons basket-quantity' onClick={() => incrementQuantity(id)}>remove</i> x
            <i className='material-icons basket-quantity' onClick={() => decrementQuantity(id)}>add</i> x
            {quantity} ={price * quantity} rub.
            <span  className="secondary-content" onClick={() =>removeOrder(id)}>
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>)
}
export default BasketItem;