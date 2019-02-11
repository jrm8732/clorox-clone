import React, {Component} from 'react'
import Shelf from './shelf'
import "./performance.css"
class Performance extends Component{
    render(){
        return(
            <div className="performance-main parent">
                <h1>Performance</h1>
                <section className='performance-components child'>
                    <div className="shelf-row">
                        <Shelf width="10%" top='20em' left='60em'/>
                    </div>
                    <div className="shelf-row">
                        <Shelf width="60%" top="35em" left ="20em"/>
                    </div>
                    <div className="shelf-row">
                        <Shelf width="50%" top="50em" left="40em"/>
                    </div>
                    
                </section>
            </div>
        )
    }
}
export default Performance