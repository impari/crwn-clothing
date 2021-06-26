import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {
    console.log(collection);
    return (
        <div className='collection-page'>
            <h2> collection Page</h2>
        </div>
    );
}

/**
 * 
 * @param {*} state 
 * @param {*} ownProps 
 * Since mapStateToProps return an Object this can use ShortHand as below. 
 * Common practice is to use short hand
 * For my understanding I have actually wrote full function
 * Below (here in comments a ShortHand code): 
            const mapStateToProps = (state, ownProps) => ({
                collection: selectCollection(ownProps.match.params.collectionId)(state)
            });
 */
const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    };
}

export default connect(mapStateToProps)(CollectionPage);