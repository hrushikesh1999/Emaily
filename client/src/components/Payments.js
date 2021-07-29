import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Button } from "@material-ui/core";

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
        <Button color="inherit">Add credits</Button>
      </StripeCheckout>
    </div>
  );
};

export default connect(null, actions)(Payments);
