import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick= {() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => (console.log(clearItemFromCart), console.log(dispatch), {
    clearItemFromCart: (cartItem) => {
        //console.log(dispatch(clearItemFromCart(cartItem)));
        dispatch(clearItemFromCart(cartItem));
    }
});

export default connect(null, mapDispatchToProps)(CheckoutItem);