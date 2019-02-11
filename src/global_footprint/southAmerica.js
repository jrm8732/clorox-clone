import React from 'react';
import { YFI, GFI, PFI,SLUG } from './fanIcon'
const SouthAmerica = () => {
    return (
        <div className='global-4 index list '>
            <h3>South America</h3>
            <ul>
                <li><SLUG/><YFI/><GFI/>Colombia</li>
                <li><SLUG/><SLUG/><GFI/>Ecuador</li>
                <li><SLUG/><YFI/><GFI/>Peru</li>
                <li><YFI/><GFI/><PFI/>Argentina</li>
                <li><SLUG/><YFI/><GFI/>Chile</li>
            </ul>
        </div>
        )
}
export default SouthAmerica;