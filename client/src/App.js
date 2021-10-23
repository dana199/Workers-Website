import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 
'react-router-dom'; 
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import login from './components/pages/login';
import resetpassword from './components/pages/resetpassword';
import UserProfile from './components/pages/UserProfile';


function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Switch>
     <Route path='/home' exact component={Home}/>
     <Route path='/sign-up' component={SignUp} />
     <Route path='/log-in' component={login} />
     <Route path='/reset-pass' component={resetpassword} />
     <Route path='/' component={UserProfile} />

   </Switch>
   </Router>
    </>
  );
}
export default App;
