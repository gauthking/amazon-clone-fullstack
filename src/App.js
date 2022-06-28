import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Register from "./Register";
import Footer from "./Footer";
import Payment from "./Payment";

function App() {
  const [{ }, dispatch] = useStateValue();
  //kind of like a dynamic IF STATEMENT
  useEffect(() => {
    // will only run once when the app component loads
    //listener
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>', authUser);
      if (authUser) {
        //the user just logged in or the user was logged in

        // this is going to shoot the data into the data layer
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // when the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/payment" element={<><Header /> <Payment /></>} />
          <Route path="/register" element={<><Register /> <Footer /></>} />
          <Route path="/login" element={<><Login /> <Footer /> </>} />
          <Route path="/checkout" element={<><Header /> <Checkout /> <Footer /></>} />
          <Route path="/" element={<><Header /> <Home /> <Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;