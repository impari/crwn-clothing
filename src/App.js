import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SignInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from '../src/pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.seletors';


class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        // Cretate a userProfile document
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }  
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route exact path='/signin' 
                render= {()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage />) }>
          </Route>
        </Switch>
      </div>
    );
  }
}

/**
 * Another way to user or write selector in mapStateToProps is using Selectors from reselect
 * Previously the code was as shown below but using Reselect we can write (uncommented code) it as below
 * 
  const mapStateToProps = ({user}) => ({
     currentUser: user.currentUser
   });

 *
 */

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
