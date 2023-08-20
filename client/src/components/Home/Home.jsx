import React from 'react'

function Home() {
    return (
        <main className='mainHome'>
            <div className='timeTable'>
                <h1>Working hours <span className='breakOutside'>break</span></h1>
                <ul>
                    <li className='closed'>
                        <h3>Monday</h3>
                        <p>Closed</p>
                    </li>
                    <li>
                        <h3>Tuesday</h3>
                        <p>8:00 - <span><span className='breakInside'>BREAK: </span>12:30 - 13:00</span> - 16:30 </p>
                    </li>
                    <li>
                        <h3>Wednesday</h3>
                        <p>8:00 - <span><span className='breakInside'>BREAK: </span>12:30 - 13:00</span> - 16:30 </p>
                    </li>
                    <li>
                        <h3>Thursday</h3>
                        <p>8:00 - <span><span className='breakInside'>BREAK: </span>12:30 - 13:00</span> - 16:30</p>
                    </li>
                    <li>
                        <h3>Friday</h3>
                        <p>8:00 - <span><span className='breakInside'>BREAK: </span>12:30 - 13:00</span> - 16:30 </p>
                    </li>
                    <li>
                        <h3>Saturday</h3>
                        <p>8:00 - 12:30 </p>
                    </li>
                    <li className='closed'>
                        <h3>Sunday</h3>
                        <p>Closed</p>
                    </li>
                </ul>
            </div>
            <div className='supply'>
                <h1>We Offer</h1>
                <ul>
                    <li>
                        <h3>Dense Material</h3>
                        <p>Explore a selection of sturdy and resilient materials designed to withstand demanding industrial conditions, ensuring long-lasting performance.</p>
                    </li>
                    <li>
                        <h3>Sewage Material (Cast Iron)</h3>
                        <p>Discover durable cast iron materials optimized for sewage systems, providing reliability and corrosion resistance for efficient waste management.</p>
                    </li>
                    <li>
                        <h3>Water Supply and Heating Material</h3>
                        <p>Choose from a range of materials tailored for water supply and heating systems, offering robust solutions to ensure efficient resource distribution.</p>
                    </li>
                    <li>
                        <h3>Cast Iron, Sheet Metal, Composite Hatches</h3>
                        <p>Access a variety of hatches crafted from cast iron, sheet metal, or composites, catering to different preferences for strength, weight, and functionality.</p>
                    </li>
                    <li>
                        <h3>Connecting Material (Electrical)</h3>
                        <p>Find essential electrical connection materials, from wires to connectors and junction boxes, ensuring safe and secure electrical setups.</p>
                    </li>
                    <li>
                        <h3>Plumbing Material</h3>
                        <p>Browse materials specially designed for plumbing needs, including pipes, fittings, and fixtures that guarantee effective fluid transportation within industrial plumbing systems.</p>
                    </li>
                    <li>
                        <h3>Stoves, Stoves, Chimneys</h3>
                        <p>Explore an assortment of stoves and chimneys suitable for industrial heating purposes, offering reliable options to meet various heating requirements.</p>
                    </li>
                    <li>
                        <h3>Meshes, Nets, Wires</h3>
                        <p>Discover versatile materials such as meshes, nets, and wires, ideal for filtration, containment, and support applications in diverse industrial settings.</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Home