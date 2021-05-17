/*** Reducer is plain function which has 2 Params
 * State = Which can be initial state 
 * action = An Object which has 'type' and 'payload'
 * and it returns an Object
 */
 const INITIAL_STATE = {
     currentUser: null
 };
 const userReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
         case 'SET_CURRENT_USER':
             return {
                 ...state,
                 currentUser: action.payload
             }
         default:
             return state;
     }
 }

 export default userReducer;