import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";


class Stuff2 extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div className="content">
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Stuff2;