import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props){

    const {order= [],
        handleBasketShow = Function.prototype,
        removeOrder = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum +el.price * el.quantity
    },0)

    return(
        <div className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}
                                removeOrder={removeOrder}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                    />
                )) : (
                    <li className="collection-item">Корзина пуста</li>
                )}
            <li className="collection-item active">
                Общая стоимость:{totalPrice} руб.
            </li>
            <li className="collection-item active">
                <button className='secondary-content btn-small'>
                    Оформить
                </button>
            </li>
            <i className="material-icons basket-close"
               onClick={handleBasketShow}
            >close
            </i>
        </div>
    )
}
export default BasketList;