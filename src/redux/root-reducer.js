/* Root Reducer is an one Big Object which holds
   all the State objects */

   import {combineReducers} from 'redux';
   import userReducer from './user/user.reducer';

   export default combineReducers({
      user: userReducer
   });
