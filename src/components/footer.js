import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div
      id={props.footerId}
      className={`footer-container1 ${props.rootClassName} `}
    >
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand-col footer-column">
              <div className="footer-logo-group">
                <div className="footer-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 3l5 5M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 4-10m5-9l-5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="footer-brand-name">Waterside House</span>
              </div>
              <p className="section-content footer-description">
                Your Integrated Trade &amp; Logistics Partner. Delivering
                strategic representation and operational excellence across
                global trade corridors.
              </p>
              <div className="footer-thq-footer-social-links-elm footer-social-links"></div>
            </div>
            <div className="footer-column">
              <h3 className="section-subtitle footer-heading">Company</h3>
              <nav className="footer-nav">
                <ul className="footer-list">
                  <Link to="/">
                    <li className="footer-thq-footer-list-item-elm10 footer-list-item">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li className="footer-thq-footer-list-item-elm11 footer-list-item">
                      <div className="footer-link">
                        <span>Our Services</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/why-waterside">
                    <li className="footer-thq-footer-list-item-elm12 footer-list-item">
                      <div className="footer-link">
                        <span>Why Waterside</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/strategic-corridors">
                    <li className="footer-thq-footer-list-item-elm13 footer-list-item">
                      <div className="footer-link">
                        <span>Strategic Corridors</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/your-global-representative">
                    <li className="footer-thq-footer-list-item-elm14 footer-list-item">
                      <div className="footer-link">
                        <span>Your Global Representative</span>
                      </div>
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="footer-column">
              <h3 className="section-subtitle footer-heading">Solutions</h3>
              <nav className="footer-nav">
                <ul className="footer-list">
                  <Link to="/services">
                    <li className="footer-thq-footer-list-item-elm15 footer-list-item">
                      <div className="footer-link">
                        <span>Customs Compliance</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li className="footer-thq-footer-list-item-elm16 footer-list-item">
                      <div className="footer-link">
                        <span>Freight Forwarding</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/strategic-corridors">
                    <li className="footer-thq-footer-list-item-elm17 footer-list-item">
                      <div className="footer-link">
                        <span>International Trade Desk</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/why-waterside">
                    <li className="footer-thq-footer-list-item-elm18 footer-list-item">
                      <div className="footer-link">
                        <span>Supply Chain Management</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/your-global-representative">
                    <li className="footer-thq-footer-list-item-elm19 footer-list-item">
                      <div className="footer-link">
                        <span>Partner Sourcing</span>
                      </div>
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="footer-column">
              <h3 className="section-subtitle footer-heading">Get in Touch</h3>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <span className="section-content footer-contact-text">
                    Suite 508, Marina Towers Newtown Barracks, Belize City
                    Belize, Central America
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-thq-footer-contact-icon-elm2 footer-contact-icon"></div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-thq-footer-contact-icon-elm3 footer-contact-icon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal-links">
              <a href="#">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Compliance</span>
                </div>
              </a>
            </div>
            <p className="footer-copyright section-content">
              &amp;copy; 2026 Waterside House Corporation. All rights reserved.
              Professional Trade &amp; Logistics Integrated.
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactions">
(function(){
  // Simple hover interaction for social icons to trigger a subtle scale
  const socialIcons = document.querySelectorAll(".footer-social-item")

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })
  })

  // Smooth appearance of copyright year (though hardcoded for 2026 as per brand context)
  const copyrightText = document.querySelector(".footer-copyright")
  if (copyrightText) {
    copyrightText.style.opacity = "0"
    setTimeout(() => {
      copyrightText.style.transition = "opacity 1s ease"
      copyrightText.style.opacity = "0.5"
    }, 500)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  footerId: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  footerId: PropTypes.string,
}

export default Footer
