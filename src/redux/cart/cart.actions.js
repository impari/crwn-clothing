
import CartActionTypes from './cart.types';
export const toggleCartDropdown = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) =>({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});