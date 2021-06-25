import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({collections}) => {
        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherColecctionProps}) => (
                    <CollectionPreview key={id} {...otherColecctionProps} />
                ))}
            </div>
            
        );
}

/* Way to USE mapStateToProps without "reselect"
 * 
  const mapStateToProps = ({shop}) => ({
    collections: shop.collections
  });
 *
 */ 

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);