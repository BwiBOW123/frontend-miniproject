import * as React from 'react';

function BuyButtonComponent() {
  // Paste the stripe-buy-button snippet in your React component
  return (
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_test_51OD87HGiZKMaUrw3uKs9UJWtgBAWjfC4uWj1KgNTw3ConjpsBzxl5VdeXYJSiCHpd0dcqO81Be0oRRHeprGHtMiR00Ekq7tTRp"
    >
    </stripe-buy-button>
  );
}

export default BuyButtonComponent;