import React from 'react'
import appltv from '../images/icons/apple-tv-logo.png';
import servent from '../images/icons/servant-logo.png';

function SeactionFive() {
  return (
    <div>
        <section className="six-section">
        <div className="left-side-wrapper-6">
            <div className="top-icon">
                <div className="icon-logo"><img src={appltv} alt=""/></div>
                <div className="servant-logo"><img src={servent} alt=""/></div>
                <div className="watch-6"><a href="#">Watch the trailer</a></div>

            </div>

        </div>
        
        <div className="right-side-wrapper-6">
            <div className="top-icon">
                <div className="icon-logo">
                    <h1>AirPods Pro</h1>
                </div>
                <div className="right-text">Magic like you’ve never heard</div>

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

export default SeactionFive;