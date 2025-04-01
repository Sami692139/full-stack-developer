import React from "react";

const Contact = () => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: `url('../../assets/images/image4.png')` }}
      >
        <div className="auto-container">
          <h2>Contact</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>About us</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Drop us a message</h2>
            <div className="text">
              Praising pain was born and I will give you a complete account of
              the system.
            </div>
          </div>

          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* Map Section */}
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd"
                    width="600"
                    height="470"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="contact-form">
                  {/* Contact form content goes here */}
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="info-column col-lg-5">
              <div className="inner-column">
                <h4>Our Address</h4>
                <div className="text">
                  Completely synergize resource-taxing relationships via premier
                  niche markets.
                </div>
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>
                    <span> Address:</span> 2024 F St, Silver Spring, MD
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span> Email:</span> kebe@garage.com
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <span> Phone:</span> +1 301 291 9845 / +1 301 897 3654
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
