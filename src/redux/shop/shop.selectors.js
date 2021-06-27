import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

/* const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}; */

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

/**
 * Now that Our SHOP DATA has been changed to collections of an Object from Array
 * Our selectCollections selector starts throwing an error in Collections Overview component (Shop Page)
 *  Here writing a selector to get an collections and convert it into Array again
 */

 export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
 );

/**
 * This is only to select single collection from CollectionS of items
 * 
 * @param {*} collectionUrlParam 
 * Below is the short Hand method to write selector function
 * 
        export const selectCollection = (collectionUrlParam) => 
         createSelector(
            [selectCollections],
            collections =>  collections.find(
                collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
        )
 * 
 */

export const selectCollection = memoize((collectionUrlParam) => {
   return createSelector(
        [selectCollections],

        /**Note for CHapter 151
         * Previously our SHOP DATA has an array but it was costly to iterate over an array everytime
         * Thus we Normalize it by changing into Object.
         * Now we have to change below code to read an Array not an Objetc
         * Commented code is the code for an Array
         * 
           collections => {
            return collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
           }
         */
       
        collections => collections[collectionUrlParam]
    )
});