import React from 'react'
import mac from "../images/home/mac-laptop.jpg";

function SeactionOne() {
  return (
    <div>
        <section className="second-section">
        <div className="internal-wrapper">
            <div className="model">16-inch model</div>
            <div className="mackpro">MacBook Pro</div>
            <div className="brightest">The best for the brightest.

            </div>

            <div className="all-section-links-wrapper">
                <ul className="all-section-ul">
                    <li><a href="#">Learn more </a></li>
                    <li><a href="#">Buy</a></li>
                </ul>


            </div>
            <div className="main-image">
                <img src={mac}alt=""/>
            </div>
        </div>
    </section>
  
    

    </div>
  )
}

export default SeactionOne;