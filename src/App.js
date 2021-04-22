import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Project from './components/project'
import Timeline from './components/timeline'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return ( 
    <div id="colorlib-page">
     
    <div id="container-wrap">
       <Sidebar></Sidebar>
    <div id="colorlib-main">
      <Introduction></Introduction>
      <About></About>
      <Timeline></Timeline>
      <Project></Project>
        </div>
    </div>
  </div>
  );
}

export default App;
