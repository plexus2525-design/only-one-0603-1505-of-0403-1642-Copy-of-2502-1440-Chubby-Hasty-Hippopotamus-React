import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import ContactDialog from './contact-dialog'
import './navigation.css'

const Navigation = (props) => {
  return (
    <div className={`navigation-container1 ${props.rootClassName} `}>
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
          <ContactDialog
            btn={
              <Fragment>
                <span className="navigation-text10">Schedule Consultation</span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="navigation-text11">Full Name</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="navigation-text12">Work Email</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="navigation-text13">Primary Interest</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="navigation-text14">Your Requirements</span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="navigation-text15">
                  Request Your Assessment
                </span>
              </Fragment>
            }
            rootClassName="contact-dialogroot-class-name"
            sectionContent={
              <Fragment>
                <span className="navigation-text16">
                  Our specialists will review your requirements and provide a
                  tailored trade and logistics strategy.
                </span>
              </Fragment>
            }
          ></ContactDialog>
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
                <Link to="/strategic-corridors">
                  <div className="navigation-thq-navigation-link-elm3 navigation-link">
                    <span>Strategic Corridors</span>
                  </div>
                </Link>
              </li>
              <li className="navigation-link-item">
                <Link to="/your-global-representative">
                  <div className="navigation-thq-navigation-link-elm4 navigation-link">
                    <span>Your Global Representative</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="navigation-thq-navigation-actions-elm navigation-actions"></div>
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
              <a href="/global-reach" id={props.navigationMobileLinkId1}>
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
                  <span>{props.text1}</span>
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
              <div className="btn-primary btn-lg btn navigation-thq-btn-elm">
                <span>Get Your Personalized Solution</span>
              </div>
            </a>
            <p className="navigation-mobile-tagline">
              Your Integrated Trade &amp; Logistics Partner
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
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
      <button type="button" className="navigation-button1 button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="navigation-text28">Button</span>
            </Fragment>
          )}
        </span>
      </button>
      <button type="button" className="navigation-button2 button">
        <span>
          {props.button1 ?? (
            <Fragment>
              <span className="navigation-text27">Button</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

Navigation.defaultProps = {
  button1: undefined,
  button: undefined,
  text1: 'Your Global Representative',
  rootClassName: '',
  navigationMobileLinkId1: '',
}

Navigation.propTypes = {
  button1: PropTypes.element,
  button: PropTypes.element,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  navigationMobileLinkId1: PropTypes.string,
}

export default Navigation
