import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import SickButton from "./styles/SickButton";
import { useState } from "react";
import nProgress from "nprogress";

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;
const NEXT_KEY = process.env.NEXT_PUBLIC_STRIPE_KEY;

const stripeLib = loadStripe(NEXT_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  async function handleSubmit(e) {
    // stop form from submitting and turn loader on
    e.preventDefault();
    setLoading(true);
    // start the page transition
    nProgress.start();
    // create the payment method via stripe (token comes back if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // handle any errors from stripe (CC declined, etc)
    if (error) {
      setError(error);
    }
    // console.log(paymentMethod);
    // console.log(error);
    // send the token from step 3 to our keystone server, via custom mutation

    // change the page to view the order

    // close the cart

    // turn the loader off
    setLoading(false);
    nProgress.done();

    console.log("to do");
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>error.message</p>}
      <CardElement />
      <SickButton>Check Out Now</SickButton>
    </CheckoutFormStyles>
  );
}

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}
