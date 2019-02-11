import React from 'react';
import { LBFI, GFI, YFI,SLUG } from './fanIcon'
const Asia = () => {
    return (
        <div className="global-3 index list">
            <h3>Asia</h3>
            <ul>
                <li><SLUG/><LBFI/>Saudi Arabia</li>
                <li><SLUG/><GFI/>United Arab Emirates</li>
                <li><YFI /><GFI />China</li>
                <li><GFI/><LBFI/>South Korea</li>
                <li><SLUG/><GFI/>Hong Kong</li>
                <li><YFI/><GFI/>Philippines</li>
                <li><SLUG/><GFI/>Malaysia</li>
            </ul>
        </div>
        )
}
export default Asia;