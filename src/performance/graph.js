import React from 'react'

const Graph=(props)=>{
    return(  
        <div className="graph-wrapper">
        <svg width="150" height="115" className="graph">
            <g transform="translate(10,0)">
                <rect class="bar" x="22" width="15" y="65" height="50"></rect> 
            </g>
            <g transform="translate(20,0)" >
                <rect class="bar" x="42" width="15" y="45" height="70"></rect> 
            </g>
            <g transform="translate(30,0)">
                <rect class="bar" x="62" width="15" y="25" height="90"></rect> 
            </g>
        </svg>
        </div>
    )
}
export default Graph