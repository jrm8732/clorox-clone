import React from 'react'

const Graph=(props)=>{
    console.log(props.graph)
    return(  
        <div className="graph-wrapper">
        <h5>{props.graph.title}</h5>
        <h6>{props.graph.sub}</h6>
        <svg width="125" height="115" className="graph">
            <g transform="translate(10,0)">
                
                <text x='66' y='22'></text>
                <rect class="bar" x="22" width="20" y={props.graph.bar1.y} height={props.graph.bar1.height}></rect> 
                <text dx='2' fontSize='10' y="115" width="40" fill='white' x='22'>Y16</text>
            </g>
            <g transform="translate(20,0)" >
                <text x='66' y='22'></text>
                <rect class="bar" x="42" width="20" y={props.graph.bar2.y} height={props.graph.bar2.height}></rect> 
                <text dx='2' fontSize='10' y="115" width="40" fill='white' x='42'>Y17</text>
            </g>
            <g transform="translate(30,0)">
                <text x='66' y='22'></text>
                <rect class="bar" x="62" width="20" y={props.graph.bar3.y} height={props.graph.bar3.height}></rect> 
                <text  dx='2 'fontSize='10' y="115" width="40" fill='white' x='62'>Y18</text>
            </g>
        </svg>
        </div>
    )
}
export default Graph