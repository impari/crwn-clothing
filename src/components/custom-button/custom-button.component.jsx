import React from 'react';
//import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles'; // Added styled component

/**
 * Bellow Commented code block is a Normal Original Component
 * Replacing original component with Styled Component named CustomButtonContainer
 * 
 
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
); 

*/


// Below is the Styled Component
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;