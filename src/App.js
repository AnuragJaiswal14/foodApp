import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Menu from "./components/Menu";
import Error404 from "./components/error404";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Menu />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
            <Route path="/error404" exact>
              <Error404 />
            </Route>
            <Redirect to="/error404" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
