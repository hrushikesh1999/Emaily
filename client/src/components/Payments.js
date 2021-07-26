import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const Payments = ({ handleToken }) => {
  return (
    <div>
      <StripeCheckout
        name="Emaily"
        description="Pay $5 for 5 email credits"
        amount={100}
        currency="INR"
        token={(token) => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-light me-2">Add credits</button>
      </StripeCheckout>
    </div>
  );
};

export default connect(null, actions)(Payments);
