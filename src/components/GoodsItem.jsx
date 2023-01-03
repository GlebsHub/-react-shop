import React from "react";

function GoodsItem(props){
    const {
        id,
        name,
        description,
        price,
        full_background,
        addOrder = Function.prototype
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>

            </div>
            <div className="card-content">
                <span className="card-title">Card Title</span>
                <p>{description}</p>
            </div>s
            <div className="card-action">
                <button className="btn" onClick={() => addOrder({
                    id,
                    name,
                    price
                })}>Buy</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price} rub</span>
            </div>
        </div>
    )
}

export default GoodsItem;