import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
    console.log(collection);
    const { title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
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