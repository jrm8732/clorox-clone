import React, {Component} from 'react'
import Shelf from './shelf'
import Graph from './graph'
import "./performance.css"
class Performance extends Component{
    render(){
        return(
            <div className="performance-main parent">
                <h1>Performance</h1>
                <section className='performance-components child'>
                    <div className="shelf-row sr1">
                        <Graph/>
                        <Shelf width="100%" top='115px' left='960px;'/>
                    </div>
                    <div className="shelf-row sr2">
                        <Graph/>
                        <Graph/>
                        <Graph/>
                        <Shelf width="100%" top="115px" left ="0"/>
                    </div>
                    <div className="shelf-row sr3">
                        <Graph/>
                        <Graph/>
                        <Graph/>
                        <Shelf width="100%" top="115px" left="0"/>
                    </div>
                    
                </section>
            </div>
        )
    }
}
export default Performance