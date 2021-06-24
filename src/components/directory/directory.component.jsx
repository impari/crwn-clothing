import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
//import SECTIONS_DATA from '../directory/sections.data';

const Directory = ({directory}) => {
  return (
    <div className='directory-menu'>
      {directory.map(({id, ...otherSectionProps}) => (
        <MenuItem key= {id} {...otherSectionProps}/>
      ))}  
    </div>  
  );
};

   
/* Way to USE mapStateToProps without "reselect"
 * 
   const mapStateToProps = ({directory}) =>(console.log(directory),{
     directory: directory.sections
   });
 *
 */ 

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);