import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartDropdown, itemCount}) => (
    console.log(toggleCartDropdown),
    // console.log(hidden),
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

/* 
* As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
  It’s frequently referred to as just mapState for short.
  It is called every time the store state changes.
  It receives the entire store state, and should return an object of data this component needs.

  Here instead of SelectCartItemsCount we can use createStructuredSelector as below
  Make sure to import createStructuredSelector
  
  const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
     
*
*/
const mapStateToProps = (state) => (console.log(state), {
   itemCount: selectCartItemsCount(state)
});

/*
 * As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.
   dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. 
   This is the only way to trigger a state change.
   Your component will receive dispatch by default, i.e., when you do not supply a second parameter to connect():
   Your mapDispatchToProps functions are expected to return an object. 
   Each fields of the object should be a function, calling which is expected to dispatch an action to the store.
   The return of your mapDispatchToProps functions are regarded as dispatchProps. 
   It will be merged as props to your connected component.
 */

const mapDispatchToProps = (dispatch) =>(console.log(toggleCartDropdown),{
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
}); 


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);