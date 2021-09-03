import React, {useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//toast
import "react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from "react-toastify";

//firebase
import { initializeApp } from 'firebase/app';
import "firebase/auth"

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './config/firebase.config'
//init firebase
const firebaseApp = initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={Signin} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
