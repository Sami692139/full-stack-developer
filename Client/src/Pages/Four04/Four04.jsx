import React, { Component } from "react";
import Error from '../../commonResource/images/home/images.jpg';

class Four04 extends Component {
  render() {
    return (
      <div>
        <section className="internal-page-wrapper top-100 bottom-100">
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-12">
                <h1><br /> <img src={Error} alt="" /></h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Four04;
