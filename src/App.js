import React from 'react';
import './App.css';
import ParentClass from './ParentClass';
import HooksComponent from './hooks/hooksComp';

function App() {
  return (
    <div className="App">
    {/* <ParentClass /> */}

    <HooksComponent />
    </div>
  );
}

export default App;


// vanilla js
// .js, .html

// 2 users 1. customer  2. Admin
// Dashboard customer - Admin
// /admin/dasboard --- Access Denied

// Task: In E-comm application 2 types of users can login(customer and admin) if customer login's only routes related to customer should be accessed(you can implement it with nested routing concept) and if customer is trying to access admin routing, application should display a message 'Access Denied'  and same for if admin is trying to access customer routes