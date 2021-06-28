import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J7EnSSGZZ9u7D79eEWu5YJY1JGmCS4wo8Mvk70FmB1JbYYBbUVGEoyK5TwBIHRHSAUazSvia6fp4P6LE16wYlsv001FEQvHsS';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout 
          label = 'Pay Now'
          name = 'CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          
          description = {`Your total is $${price}`}
          amount = {priceForStripe}
          panelLabel = 'Pay now with'
          token = {onToken}
          stripeKey = {publishablekey}
        />
    );
};

export default StripeCheckoutButton;

