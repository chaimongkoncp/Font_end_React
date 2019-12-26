import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddPage from './component/AddPage';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditPage from './component/EditPage';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={AddPage} />
        <Route path="/edit/:id" exact component={EditPage} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  )
}

export default App;
