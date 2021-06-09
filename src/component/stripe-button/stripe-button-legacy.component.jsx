import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtonLegacy = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51IyjjVFAIj2wqVXqql66XkpdcU5NQgsVmk3WsehmAh0Ujxf8AyCGZbOIa1sLemykLw0uZdD1HRlr3EXn2zQrJCQH0025vRncuf';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  )
}

export default StripeCheckoutButtonLegacy; 