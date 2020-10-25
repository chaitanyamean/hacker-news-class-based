import React from 'react';
import './App.css';

import {Route} from 'react-router-dom'

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './protectedRoute';


function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Login}></Route>
      
      <ProtectedRoute path="/dashboard" component={Dashboard}/>

    </div>
  );
}

export default App;


// vanilla js
// .js, .html

// 2 users 1. customer  2. Admin
// Dashboard customer - Admin
// /admin/dasboard --- Access Denied