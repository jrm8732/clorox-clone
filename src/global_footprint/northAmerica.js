import React from 'react'
import { PFI,YFI,GFI,BFI, SLUG} from './fanIcon'

 const NorthAmerica = (props) => {
    return (
        <div className='global-1 index  list' >
            <h3>North America</h3>
                <ul>
                  <li><BFI/><YFI/><GFI/><PFI/>United States</li>
                <li><SLUG/><SLUG/><YFI /><GFI />Canada</li>
                <li><SLUG/><SLUG/><YFI /><GFI />Mexico</li>
                <li><SLUG/><SLUG/><SLUG/><GFI />Dominican Republic</li>
                <li><SLUG/><SLUG/><YFI /><GFI />Puerto Rico</li>
                <li><SLUG/><SLUG/><SLUG/><GFI />Panama</li>
                <li><SLUG/><SLUG/><YFI /><GFI />Costa Rica</li>
                </ul>
            </div>
        )
}
export default NorthAmerica