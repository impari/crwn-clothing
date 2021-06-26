import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
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
        collections => {
            return collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
        }
    )
});