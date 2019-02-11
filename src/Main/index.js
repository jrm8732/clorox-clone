
import React, {Component} from 'react'
import Sales from '../sales/index.js'
import GlobalFootprint from '../global_footprint/index.js'
class Main extends Component{

	render()
	{
		return(
			<main>
				<header>
					<h1>2018 SCORECARD</h1>
				</header>
                <Sales />
                <GlobalFootprint/>
			</main>
		)
	}
}
export default Main
