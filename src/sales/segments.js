import React, { Component } from 'react'

class SegmentSales extends Component {
    render() {
        return (
            <React.Fragment>
            <div class='column g1'>
                <h2>Sales by Segment</h2>
                <div class='row'>
                    <div class='column h-c'>
                        <h4>34%</h4>
                        <h6>Cleaning</h6>
                        <div class="border-circle"></div>
                    </div>
                    <div class='column h-d'>
                        <ul>
                            <li>19% HOME CARE</li>
                            <li>(Clorox | Pine-Sol | Tilex | Formula 409 | Liquid-Plumr)</li>
                            <li>9% LAUNDRY</li>
                            <li>(Clorox | Clorox 2)</li>
                            <li>6% PROFESSIONAL PRODUCTS</li>
                            <li>(Clorox Healthcare | Clorox Commercial Solutions)</li>
                        </ul>
                    </div>
                </div>
                <div class='row r2'>
                    <div class='column h-c'>
                        <h4>32%</h4>
                        <h6>Household</h6>
                    </div>
                    <div class='column h-d'>
                        <ul>
                            <li>14% BAGS, WRAPS, CONTAINERS</li>
                            <li>(Glad)</li>
                            <li>9% CHARCOAL</li>
                            <li>(Kingsford | Match Light)</li>
                            <li>7% CAT LITTER</li>
                            <li>(Fresh Step | Scoop Away)</li>
                            <li>2% Digestive Health</li>
                            <li>(RenewLife)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class='column g2'>
                <div class='row'>
                    <div class='column h-c'>
                        <h4>17%</h4>
                        <h6>Lifestyle</h6>
                    </div>
                    <div class='column h-d'>
                        <ul>
                            <li>9% FOOD PRODUCTS</li>
                            <li>(Hidden Valley | Soy Voy | KC Masterpiece)</li>
                            <li>4% NATURAL PERSONAL CARE</li>
                            <li>(Burt’s Bees)</li>
                            <li>3% WATER FILTRATION</li>
                            <li>(Brita)</li>
                            <li>1% Dietary Supplements</li>
                            <li>(Rainbow Light | Natural Vitality | Neocell)</li>
                        </ul>
                    </div>
                </div>

                <div class='row r4'>
                    <div class='column h-c'><h4>17%</h4><h6>International</h6></div>
                    <div class='column country'>
                        <ul>
                            <li>8% LATIN AMERICA</li>
                            <li>4% CANADA</li>
                            <li>3% REST OF WORLD</li>
                            <li>2% AUSTRALIA/NEW ZEALAND</li>
                        </ul>
                    </div>
                </div>
                </div>
                </React.Fragment>
            )
    }
}
export default SegmentSales