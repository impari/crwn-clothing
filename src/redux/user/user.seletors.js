/**
 * https://www.npmjs.com/package/reselect
 *  createSelector(...inputSelectors | [inputSelectors], resultFunc)
    Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc.
    createSelector determines if the value returned by an input-selector has changed between calls using reference equality (===). 
    Inputs to selectors created with createSelector should be immutable.
 **/

 import {createSelector} from 'reselect';

const selectUser = state => state.user;

 export const selectCurrentUser = createSelector(
     [selectUser],
     user => user.currentUser
 )

 

 

