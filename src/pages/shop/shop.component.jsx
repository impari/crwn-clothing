import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    firestore,
    convertCollectionsSnapshotToMap,
  } from '../../firebase/firebase.utils.js';
  
  import { updateCollections } from '../../redux/shop/shop.actions';
  import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/*
const ShopPage = ({match}) => {
       console.log(match);
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
            
        );
}

export default ShopPage; 

*/

/**
 * Please note: Below inside return statemtent where we have added Routes;
 * now instead of passing component as an attribute; pass a 'Render' as an attribute,
 * Refer to official documentation for more info on Render
 */

class ShopPage extends React.Component {
   state = {
     loading: true
   };

    unsubscribeFromSnapshot = null;
  
    componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');
  
      collectionRef.get().then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({loading : false});
      });
    }
  
    render() {
      const { match } = this.props;
      const { loading } = this.state;

      return (
        <div className='shop-page'>
             
          {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          /> */}
          
           <Route exact path={`${match.path}`} 
            render = {props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)} />

           <Route
            path={`${match.path}/:collectionId`}
            render = {props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />

        </div>
      );
    }
  }

  
  const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  });
  
  export default connect(null, mapDispatchToProps)(ShopPage);