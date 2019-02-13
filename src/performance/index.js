import React, { Component } from 'react'
import Shelf from './shelf'
import Graph from './graph'
import "./performance.scss"
class Performance extends Component {
    state={
       group1:[{bar1:{y:'57.39', height:'57.61'}, bar2:{y:'55.27',height:'59.73'},bar3:{y:'53.7', height:'61.24'},title:'NET SALES',sub:'($ Millions)',a:'$5,761',b:'$5,973',c:'$6,124'}],
       group2:[{bar1:{y:'50.2', height:'64.8'}, bar2:{y:'44.7',height:'70.3'},bar3:{y:'32.7', height:'82.3'},title:'EARNINGS FROM CONTINUED OPERATIONS',sub:'($ Millions)',a:'$648',b:'$703', c:'$823'},
               {bar1:{y:'22.5', height:'92.5'}, bar2:{y:'21.5',height:'93.5'},bar3:{y:'22.5', height:'92.5'},title:'EBIT MARGIN',sub:'(as a % of Net Sales) (Non-GAAP)',a:'18.5%',b:'18.7%',c:'18.5%'},
               {bar1:{y:'66', height:'49'}, bar2:{y:'62.5',height:'52.5'},bar3:{y:'52.6', height:'62.4'},title:'ECONOMIC PROFIT',sub:'(non-GAAP) ($ Millions)',a:'$490',b:'$525',c:'$624'}],
       group3:[{bar1:{y:'65.8', height:'49.2'}, bar2:{y:'61.5',height:'53.5'},bar3:{y:'52.4', height:'62.6'},title:'DILUTED NET EARNINGS PER SHARE FROM CONTINUING OPERATIONS',sub:'($ Millions)',a:'$4.92',b:'$5.35', c:'$6.26'},
       {bar1:{y:'38.2', height:'76.8'}, bar2:{y:'27.9',height:'87.1'},bar3:{y:'17.6', height:'97.4'},title:'NET CASH PROVIDED BY CONTINUING OPERATIONS',sub:'($ Millions)',a:'$768',b:'$871',c:'$974'},
       {bar1:{y:'55.4', height:'59.6'}, bar2:{y:'51',height:'64'},bar3:{y:'37', height:'78'},title:'FREE CASH FLOW',sub:'(non-GAAP) ($ Millions)',a:'$596',b:'$640',c:'$780'}]
    }
    render() {
        return (
            <div className="performance-main parent">
            <div className='title'>
            <h1>Performance</h1>
            <p>Achieving financial success while</p>
            <p>investing for the long term.</p>
            </div>
                
                <section className='performance-components child'>
                    <div className="shelf-row sr1">
                        {this.state.group1.map(graph=><Graph graph={graph}/>)}
                        <Shelf width="100%" top="139px"/>
                    </div>
                    <div className="shelf-row sr2">
                        {this.state.group2.map(graph=><Graph graph={graph}/>)}
                        <Shelf width="100%" top="139px"/>
                    </div>
                    <div className="shelf-row sr3">
                    {this.state.group3.map(graph=><Graph graph={graph}/>)}
                    <Shelf width="100%" top="153px"/>
                    </div>

                </section>
            </div>
        )
    }
}
export default Performance