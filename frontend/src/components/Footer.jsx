import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Abstract</h4>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Community</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <h5>Contact Us</h5>
        <ul>
          <li>info@abstract.com</li>
        </ul>
      </div> <div className="footer-bottom">
      <p>&copy; Copyright 2022 <br />Abstract Studio Design, Inc. <br /> All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
