import React from 'react'
import applCart from '../images/icons/apple-card-logo.png';
import wach from '../images/icons/watch-series5-logo.png';
function SeactionFour() {
  return (
    <div>
        <section className="fifth-section">
        <div className="left-side-wrapper">
            <div className="top-icon">
                <div className="icon-logo"><img src={wach} alt=""/></div>
                <div className="left-text">With the new Always-On Retina display.
                    You’ve never seen a watch like this.</div>

                <div className="all-section-links-wrapper">
                    <ul className="all-section-ul">
                        <li>
                            <a href="#">Learn more</a>
                        </li>
                        <li>
                            <a href="#">Buy</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="right-side-wrapper">
            <div className="top-icon">
                <div className="icon-logo"><img src={applCart} alt=""/></div>
                <div className="right-text">Get 3% Daily Cash on purchases from Apple using Apple Card.</div>

                <div className="all-section-links-wrapper">
                    <ul className="all-section-ul">
                        <li>
                            <a href="#">Learn more</a>
                        </li>
                        <li>
                            <a href="#">Buy</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </section>
    </div>
  )
}

export default SeactionFour;