import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import React from 'react';
import '../App.scss';
import '../index.scss';
import Stuff from "./stuff";

class Menu extends React.Component {  
    render() {
      return (
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a>Menu</a>
              <Submenu />
            </li>
          </ul>
        </nav>
      )
    }
  }
  
  class Submenu extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item ">
            <a class="active" href="#home">Home</a>
          </li>
          <li className="nav__submenu-item ">
          <a href="#stuff">Slider</a>
          </li>
          <li className="nav__submenu-item ">
            <a href="#contact">About</a>
          </li>
        </ul>
      )
    }
  }
  
  ReactDOM.render(
    <Menu />,
    document.getElementById("menu-container")
  );