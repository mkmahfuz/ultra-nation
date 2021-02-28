import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((total,country)=>total+country.population,0)
    return (
        <div>
            <h2>This is cart {cart.length}</h2>
            <h3>Total population: {totalPopulation}</h3>
        </div>
    );
};

export default Cart;