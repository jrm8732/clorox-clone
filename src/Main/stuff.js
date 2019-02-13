import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sales from '../sales/index.js'
import GlobalFootprint from '../global_footprint/index.js'
import {
	Route,
	NavLink,
	HashRouter
  } from "react-router-dom";
//import "./index.css";
 
class Stuff extends Component {
    render() {
        return (      
            <Carousel>
                <div id="my">
        <HashRouter>
          <div>
            <h1>Simple Spa</h1>
            <div className="content">
              <Route path="/Sales" component={Sales}/>
              <Sales />
            </div>
          </div>
        </HashRouter>
          </div>
                <div>
                    <img src="http://www.afro.com/wp-content/uploads/2017/03/unemployment-3.jpg" />
                    <p className="legend">Legend 2</p>     
                </div>
          <div>
        <HashRouter>
          <div>
            <h1></h1>
            <div className="content">
              <Route path="/GlobalFootprint" component={GlobalFootprint}/>
	<GlobalFootprint/>
            </div>
          </div>
        </HashRouter>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Stuff;

