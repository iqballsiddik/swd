import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../home/Home';

import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import DetailItem from '../detailItem/DetailItem';
import About from '../about/About';

// this use react context
// create context
export const RootContext = createContext();
// create Provider context
const Provider = RootContext.Provider;

export default function Routers() {
  // state global
  const [order, setOrder] = useState(0);

  // function  action order
  function handleChangeState(action) {
    if (action.type === 'PLUS') {
      return setOrder(order + 1);
    }
    if (action.type === 'MINUS') {
      if (order > 0) {
        return setOrder(order - 1);
      }
    }
  }

  return (
    // This is all router
    <Router>
      <Provider value={{ order, handleChangeState }}>
        <Route exact path="/" component={Home} />
        <Route path="/nav-bar" component={NavBar} />
        <Route path="/about" component={About} />
        <Route path="/footer" component={Footer} />
        <Route path="/detailitem" component={DetailItem} />
      </Provider>
    </Router>
  );
}
