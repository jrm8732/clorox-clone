import React, { Component } from 'react'
import Shelf from './shelf'
import Graph from './graph'
import "./performance.css"
class Performance extends Component {
    state={
       group1:[{bar1:{y:'57.39', height:'57.61'}, bar2:{y:'55.27',height:'59.73'},bar3:{y:'53.7', height:'61.24'},title:'NET SALES',sub:'($ Millions)',a:'$5,761',b:'$5,973',c:'$6,124'},
               {bar1:{y:'50.2', height:'64.8'}, bar2:{y:'44.7',height:'70.3'},bar3:{y:'32.7', height:'82.3'},title:'EARNINS FROM CONTINUED OPERATIONS',sub:'($ Millions)',a:'$648',b:'$703', c:'$823'},
               {bar1:{y:'22.5', height:'92.5'}, bar2:{y:'21.5',height:'93.5'},bar3:{y:'22.5', height:'92.5'},title:'EBIT MARGIN',sub:'(as a % of Net Sales) (Non-GAAP)',a:'18.5%',b:'18.7%',c:'18.5%'}]
    }
    render() {
        return (
            <div className="performance-main parent">
                <h1>Performance</h1>
                <section className='performance-components child'>
                    <div className="shelf-row sr1">
                        {/* <Graph /> */}
                        <Shelf width="100%" top='115px' left='960px' />
                    </div>
                    <div className="shelf-row sr2">
                        {this.state.group1.map(graph=><Graph graph={graph}/>)}
                        <Shelf width="100%" top="115px" left="0" />
                    </div>
                    <div className="shelf-row sr3">
                        {/* <Graph />
                        <Graph />
                        <Graph /> */}
                        <Shelf width="100%" top="115px" left="0" />
                    </div>

                </section>
            </div>
        )
    }
}
export default Performance