import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route,useHistory } from 'react-router-dom'; 
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import login from './components/pages/login';
import resetpassword from './components/pages/resetpassword';
import UserProfile from './components/pages/UserProfile';
import About from'./components/pages/About';
import Contact from'./components/pages/Contact';
import test from './components/pages/test';
import Chat from './components/pages/Chat';

function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/sign-up' component={SignUp} />
     <Route path='/log-in' component={login} />
     <Route path='/reset-pass' component={resetpassword} />
     <Route path='/UserProfile' component={UserProfile}/>
     <Route path='/About' component={About}/>
     <Route path='/Contact' component={Contact}/>
     <Route path='/test' component={test}/>
     <Route path='Chat' component={Chat}/>

   </Switch>
   </Router>
    </>
  );
}
export default App;
