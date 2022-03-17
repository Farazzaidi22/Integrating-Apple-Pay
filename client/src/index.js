import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KeDr4BlWQXJ7KuKqSMhKRuAoDaRuZaA1jgtqopmaGjbVMMNwCotkmNnoQuVEYkiR3WI9lddJHmitW9xXi9mYtS900mfaNXFWf');
ReactDOM.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
      </Elements>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
