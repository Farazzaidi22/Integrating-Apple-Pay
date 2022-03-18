import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


document.addEventListener('DOMContentLoaded', async () => {
  // const {publishableKey} = await fetch('http://localhost:4242/config').then(
  //   response => {
  //     console.log(response, "ressssssss")
  //     response.json()
  //   }
  // );

  const publishableKey = await axios.get(`http://localhost:4242/config`)
      .then(response => {
        console.log(response, "ressssssss newwwww")
        return response.data.publishableKey
      })

  // console.log("here here", publishableKey)
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