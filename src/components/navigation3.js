import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import ContactDialog2 from './contact-dialog2'
import './navigation3.css'

const Navigation3 = (props) => {
  return (
    <div className="navigation3-container1">
      <nav id="main-navigation" className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div
              aria-label="Waterside House Corporation Home"
              className="navigation-logo-link"
            >
              <div className="navigation-logo-content">
                <div className="navigation-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">Waterside House</span>
              </div>
            </div>
          </a>
          <ContactDialog2
            btn={
              <Fragment>
                <span className="navigation3-text10">
                  Schedule Consultation
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="navigation3-text11">Full Name</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="navigation3-text12">Work Email</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="navigation3-text13">Primary Interest</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="navigation3-text14">Your Requirements</span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="navigation3-text15">
                  Request Your Assessment
                </span>
              </Fragment>
            }
            rootClassName="contact-dialog2root-class-name"
            sectionContent={
              <Fragment>
                <span className="navigation3-text16">
                  Our specialists will review your requirements and provide a
                  tailored trade and logistics strategy.
                </span>
              </Fragment>
            }
          ></ContactDialog2>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li className="navigation-link-item">
                <a href="/services">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/why-waterside">
                  <div className="navigation-link">
                    <span>Why Waterside</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <div className="navigation3-thq-thq-navigation-link-elm-elm3 navigation-link">
                  <span>Strategic Corridors</span>
                </div>
              </li>
              <li className="navigation-link-item">
                <div className="navigation3-thq-thq-navigation-link-elm-elm4 navigation-link">
                  <span>Your Global Representative</span>
                </div>
              </li>
            </ul>
            <div className="navigation3-thq-thq-navigation-actions-elm-elm navigation-actions">
              <div className="btn-primary btn btn-sm">
                <span>Get Solution</span>
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <button
            id="mobile-menu-open"
            aria-label="Open Menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewbox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <div className="navigation-logo-content">
            <div className="navigation-logo-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                </g>
              </svg>
            </div>
            <span className="navigation-brand-name">Waterside House</span>
          </div>
          <button
            id="mobile-menu-close"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewbox="0 0 24 24"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <ul className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="/services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/why-waterside">
                <div className="navigation-mobile-link">
                  <span>Why Waterside</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/global-reach">
                <div className="navigation-mobile-link">
                  <span>Strategic Corridors</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/our-process">
                <div className="navigation-mobile-link">
                  <span>Our Process</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-mobile-footer">
            <a href="/contact">
              <div className="btn-primary btn-lg btn">
                <span>Get Your Personalized Solution</span>
              </div>
            </a>
            <p className="navigation-mobile-tagline">
              Your Integrated Trade &amp; Logistics Partner
            </p>
          </div>
        </div>
      </div>
      <div className="navigation3-container2">
        <div className="navigation3-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const nav = document.getElementById("main-navigation")
  const openBtn = document.getElementById("mobile-menu-open")
  const closeBtn = document.getElementById("mobile-menu-close")
  const overlay = document.getElementById("mobile-overlay")

  const toggleMenu = (isOpen) => {
    overlay.classList.toggle("is-active", isOpen)
    document.body.style.overflow = isOpen ? "hidden" : ""
    openBtn.setAttribute("aria-expanded", isOpen)
  }

  openBtn.addEventListener("click", () => toggleMenu(true))
  closeBtn.addEventListener("click", () => toggleMenu(false))

  overlay.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      toggleMenu(false)
    }
  })

  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      nav.style.transform = "translateY(0)"
      nav.style.boxShadow = "none"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      nav.style.transform = "translateY(-100%)"
    } else {
      nav.style.transform = "translateY(0)"
      nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <button type="button" className="button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="navigation3-text29">Button</span>
            </Fragment>
          )}
        </span>
      </button>
      <button type="button" className="button">
        <span>
          {props.button1 ?? (
            <Fragment>
              <span className="navigation3-text28">Button</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

Navigation3.defaultProps = {
  button1: undefined,
  button: undefined,
}

Navigation3.propTypes = {
  button1: PropTypes.element,
  button: PropTypes.element,
}

export default Navigation3
