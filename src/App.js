// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import News from './components/News';
import New from './components/New';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";

export default class App extends Component {
  //  name="Yajat"
  pageSize=10;
  render() {
    return (
      <div>
         <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<New pagesize={this.pageSize} country={"in"} category={"general"} />} />
        <Route path="/business" element={<New pagesize={this.pageSize} country={"in"} category={"business"} />} />
        <Route path="/entertainment" element={<New pagesize={this.pageSize} country={"in"} category={"entertainment"} />} />
        <Route path="/health" element={<New pagesize={this.pageSize} country={"in"} category={"health"} />} />
        <Route path="/science" element={<New pagesize={this.pageSize} country={"in"} category={"science"} />} />
        <Route path="/sports" element={<New pagesize={this.pageSize} country={"in"} category={"sports"} />} />
        <Route path="/technology" element={<New pagesize={this.pageSize} country={"in"} category={"technology"} />} />
      </Routes>
    </Router>
      </div>
    )
  }
}
