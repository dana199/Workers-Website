import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route,useHistory } from 'react-router-dom'; 
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import login from './components/pages/login';
import resetpassword from './components/pages/resetpassword';
import UserProfile from './components/pages/UserProfile';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

function App() {
  return (
    <>
    <Router>
      <div className="language-select">
    <LanguageSelect/>
    </div>
   <Navbar/>
   <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/sign-up' component={SignUp} />
     <Route path='/log-in' component={login} />
     <Route path='/reset-pass' component={resetpassword} />
     <Route path='/UserProfile' component={UserProfile}/>

   </Switch>
   </Router>
    </>
  );
}
export default App;
