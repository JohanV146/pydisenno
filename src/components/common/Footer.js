import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="socialIcons">
          <a href="#"><i className="whatsapp"></i></a>
          <a href="#"><i className="instagram"></i></a>
          <a href="#"><i className="twitter"></i></a>
          <a href="#"><i className="facebook"></i></a>
          <a href="#"><i className="threads"></i></a>
        </div>
        <div className="divider"></div>
        <div className="footerLinks">
          <a href="#">INNOVAUTO © 2024</a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">Contact</a>
          <a href="#">News</a>
          <a href="#">Get updates</a>
          <a href="#">Locations</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
