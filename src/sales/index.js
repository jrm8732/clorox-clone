import React, {Component} from 'react'
import MainStats from './mainStats.js'
import SegmentSales from './segments.js'
import './sales.css'
class Sales extends Component{
	render()
		{
			return(
                <section>
                    <article class='pg-2018-scorecard'>
                        <div class='grid_scorecard'>
                            <MainStats />
                            <SegmentSales/>
                        </div>
                    </article>
				</section>
			)
		}
}
export default Sales
