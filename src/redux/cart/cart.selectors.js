/**
 * https://www.npmjs.com/package/reselect
 *  createSelector(...inputSelectors | [inputSelectors], resultFunc)
    Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc.
    createSelector determines if the value returned by an input-selector has changed between calls using reference equality (===). 
    Inputs to selectors created with createSelector should be immutable.
 **/

 import {createSelector} from 'reselect';

 const selectCart = state => state.cart;

 export const selectCartItems = createSelector(
     [selectCart],
     cart => cart.cartItems
 )

 export const selectCartHidden = createSelector(
     [selectCart],
     cart => cart.hidden
 )
 
 export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    )
 )

 export const selectCartTotal = createSelector(
     [selectCartItems],
     cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0
     )
 )
