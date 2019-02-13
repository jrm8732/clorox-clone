import React, {Component} from 'react'
import Sales from '../sales/index.js'
import GlobalFootprint from '../global_footprint/index.js'
import {
	Route,
	NavLink,
	HashRouter
  } from "react-router-dom";
//import Home from "./home";
import Stuff from "./stuff";
//import Contact from "./contact";
class Main extends Component{
	//<Sales />
	//<GlobalFootprint/>
	//<ul className="header">
	//<li><NavLink to="/Sales">Sales</NavLink></li>
	//<li><NavLink to="/GlobalFootprint">GlobalFootprint</NavLink></li>
  //</ul>
	render()
	{
		return(
			<main>
				<header>
					<h1>2018 SCORECARD</h1>
				</header>
		<HashRouter>
        <div>
            <h1></h1>
            <div className="content">
        </div>
          </div>
       	</HashRouter>

				<Stuff/>
			</main>
		)
	}
}
export default Main




