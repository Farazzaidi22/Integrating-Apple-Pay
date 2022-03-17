import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route} from 'react-router-dom'


import List from './List';
import ApplePay from './ApplePay'

import './App.css';


function App() {
  return (
    <Routes>
      <Route exact path="/">
        {/* <List/> */}
      </Route>

      <Route exact path="/applepay" element={<ApplePay/>}>
      </Route>

    </Routes>
  );
};

export default App;
