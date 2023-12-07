import React from "react";
import logo from "../assets/white.png"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menus">
        <div className="brand">
          <img src={logo} alt="abbys"></img>
          <p>
            Your Certified Mental
            <br /> Health Therapist in the UK
          </p>
          <div className="prof-body-footer">
            <img src="./images/membership.jpeg" alt="abbys"></img>
            <img src="./images/infantloss.png" alt="abby"></img>
          </div>
        </div>
        <div className="quick-links">
          <h5>Quick Link</h5>
          <a href="#">About Abby</a>
          <a href="#">Contact Abby</a>
          <a href="#">Book a session</a>
          <a href="#">Abby and Friend</a>
        </div>

        <div className="body">
          <h5>Contact Us</h5>
          <a href="#">info@abbystme.com</a>
          <a href="#">+447787986526</a>
          <a href="#">WhatsApp</a>
        </div>

        <div className="newsletter">
          <h5>Payment Method</h5>

          <img src="./images/method.png" alt="abbys"></img>
        </div>
      </div>

      <div className="copyright">
        <p>
          &copy; 2023 | Abby's Time is Your Time is an ASGA Innovation LTD
          COMPANY.
          <br /> Registered in the UK with Registration No 09759612
        </p>
      </div>
      
    </div>
  );
};

export default Footer;
