import React from "react";
import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addOrder = Function.prototype} = props;

    if (!goods.length) {
       return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} addOrder={addOrder}/>
        ))}
    </div>
}

export default GoodsList;