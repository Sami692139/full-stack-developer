import React from 'react'
import newipod from "../images/icons/new-ipad-logo.png";

function SeactionSix() {
  return (
    <div>
      <section className="seven-section">
        <div className="left-side-wrapper-7">
          <div className="model">16-inch model</div>
          <div className="mackpro2">MacBook Pro</div>
          <div className="brigthest2">The best for the brightest.</div>

          <div className="all-section-links-wrapper">
            <ul className="all-section-ul">
              <li>
                <a href="#">Learn more </a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
          <div className="main-image "></div>
        </div>
        <div className="right-side-wrapper-7">
          <div className="top-icon">
            <div className="icon-logo">
              <img src={newipod} alt="" />
            </div>
            <div className="right-text">
              Like a computer. Unlike any computer.
            </div>

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
  );
}

export default SeactionSix;