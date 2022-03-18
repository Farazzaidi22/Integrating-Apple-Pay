import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { BrowserRouter } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', async () => {
  const {publishableKey} = await fetch('config').then((r) => r.json());
  console.log("here here", publishableKey)
  const stripePromise = loadStripe(publishableKey);

  ReactDOM.render(
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>,
    document.getElementById('root')
  );
});