import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../home/Home';

import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import DetailItem from '../detailItem/DetailItem';
import About from '../about/About';
import Hijab from '../product/hijab/Hijab';

// this use react context
// create context
export const RootContext = createContext();
// create Provider context
const Provider = RootContext.Provider;

export default function Routers() {
  // state global
  const [order, setOrder] = useState(0);
  const [loading, setLoading] = useState(true);
  let total;
  let array = [];

  /**
   * array = [
   * { id : 6,
   * quantity : 6
   * },
   * { id : 7,
   * quantity : 5
   * }
   * ]
   */
  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      // api
      setLoading(false);
    }, 5000)
  }, []);


  // function  action order
  function handleChangeState(action) {
    if (action.type === 'PLUS') {
      console.log(action.id)
      total = order + 1;
      console.log(total)
      return setOrder(total + 1);
    }
    if (action.type === 'MINUS') {
      if (order > 0) {
        var findArray = array.find(action.id)
        if (findArray.length > 0) {
          findArray.quantity = findArray.quantity + 1
        } else {
          const obj = {
            id: action.id,
            quantity: order - 1
          }
          array.push(obj)
        }
        return setOrder(order - 1);
      }
    }
  }

  return (
    // This is all router
    <Router>
      <Provider value={{ order, handleChangeState, loading }}>
        <Route exact path="/" component={Home} />
        <Route path="/nav-bar" component={NavBar} />
        <Route path="/about" component={About} />
        <Route path="/hijab" component={Hijab} />
        <Route path="/footer" component={Footer} />
        <Route path="/detailitem" component={DetailItem} />
      </Provider>
    </Router>
  );
}
