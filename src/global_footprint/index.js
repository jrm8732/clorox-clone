import React, { Component } from 'react'
import './global.css'
import NorthAmerica from './northAmerica'
import Europe from './europe'
import Asia from './asia'
import SouthAmerica from './southAmerica'
import Africa from './africa'
import { GFI, PFI, BFI, LBFI, YFI } from './fanIcon' 
class GlobalFootprint extends Component {
    state = {
        colors:['red','green', 'yellow', 'blue','none']
    }
    render() {
        return (
            <div class="global-main parent">
                <h2>Our Global Footprint</h2>
                <img height={'900px'} width={"1400px"} src='https://i.pinimg.com/originals/95/b3/85/95b385768ea7db895b3df393d9572a02.png' />
                <div className="global-menu">
                    <ul>
                        <li className='blue-g G'><BFI/>Global Headquarters</li>
                        <li className='yellow-g P'><YFI/>Plants</li>
                        <li className='green-g A'><GFI/>Administrative Sales and Offices</li>
                        <li className='lblue-g J'><LBFI/>Joint Ventures</li>
                        <li className="purple-g R"><PFI/>R&D Facilities</li>
                    </ul>
          
                </div>
                <NorthAmerica />
                <Europe />
                <Asia />
                <SouthAmerica />
                <Africa />
                <div className="global-6 index list row">
                    <h3><GFI/>Austrailia</h3>
                </div>
                <div className="global-7 index list row">
                    <h3><GFI/>New Zealand</h3>
                </div>
            </div>
        )
    }
}export default GlobalFootprint