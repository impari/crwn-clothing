import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'; 

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
            ) : (
                    <span className='empty-message'> Your cart is empty</span>
                )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);


/**
 * Another way to user or write selector in mapStateToProps is using Selectors from reselect
 * Previously the code was as shown below but using Reselect we can write (uncommented code) it as below
 * 
 * Firstly mapStateToProps without reselect
    const mapStateToProps = ({cart: {cartItems}}) =>({
        cartItems
    });

    Secondly mapStateToProps with reselect
    const mapStateToProps = (state) =>(console.log(selectCartItems(state)),{
        cartItems: selectCartItems(state)
    });

    Finally mapStateToProps with reselect and  createStructuredSelector
    const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
    });

 *
 */


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));