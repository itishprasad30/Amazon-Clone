import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Payment from "./Component/Payment";
import Orders from "./Component/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Component/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IY0CNSGBFuQXTAcZAD51aSCbXlGgX8N5jhtx0YuuU0W1n4390Fqu0SZzaLOaa7mUnyE0gMsgHbyHm3hOkHzvgMb00a2RGAeRT"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Will only run the component once when it loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("The USER is ====>>> ", authUser);

      if (authUser) {
        // the user just logged in /the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
