import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import BackgroundImage from './background-image'
import BackgroundOverlay from './background-overlay'
import LogisticsServicesHeader from './logistics-services-header'
import './logistics-services-section.css'

const LogisticsServicesSection = (props) => {
  return (
    <section
      id={props.logisticsServicesSectionId}
      className="logistics-services-section-thq-logistics-services-section-elm logistics-services-section"
    >
      <div className="logistics-services-background">
        <BackgroundImage backgroundImageId="BackgroundImage"></BackgroundImage>
        <BackgroundOverlay backgroundOverlayId="BackgroundOverlay"></BackgroundOverlay>
      </div>
      <div className="logistics-services-container">
        <LogisticsServicesHeader
          logisticsServicesSubtitle={
            <Fragment>
              <span className="logistics-services-section-text10">
                Specialized customs, forwarding, and advisory solutions for food
                products, chemicals, equipment, and consumer goods.
              </span>
            </Fragment>
          }
        ></LogisticsServicesHeader>
        <div className="services-grid">
          <article className="service-card">
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <div className="icon-background"></div>
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      r="1"
                      cx="12.1"
                      cy="12.1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {props.serviceTitle ?? (
                    <Fragment>
                      <span className="logistics-services-section-text21">
                        Customs Clearance &amp; Compliance
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="service-description">
                  {props.serviceDescription ?? (
                    <Fragment>
                      <span className="logistics-services-section-text12">
                        Expert handling of all documentation and regulatory
                        requirements for rapid cargo release.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </article>
          <article className="service-card">
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <div className="icon-background"></div>
                <div className="service-icon">
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
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {props.serviceTitle1 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text14">
                        Freight Forwarding &amp; Delivery
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="service-description">
                  {props.serviceDescription1 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text15">
                        Seamless multi-modal transportation strategies across
                        land, sea, and air corridors worldwide.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </article>
          <article className="service-card">
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <div className="icon-background"></div>
                <div className="service-icon">
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
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                      <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {props.serviceTitle2 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text17">
                        End-to-End Supply Chain Management
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="service-description">
                  {props.serviceDescription2 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text19">
                        Integrated solutions from the supplier&apos;s facility
                        to your final destination, ensuring full control and
                        visibility.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </article>
          <article className="service-card">
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <div className="icon-background"></div>
                <div className="service-icon">
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
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {props.serviceTitle3 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text22">
                        Trade Advisory &amp; Representation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="service-description">
                  {props.serviceDescription3 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text18">
                        Expert support in negotiations, contract structuring,
                        and representing your interests in international
                        transactions.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </article>
          <article className="service-card">
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <div className="icon-background"></div>
                <div className="service-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {props.serviceTitle4 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text16">
                        Market Entry &amp; Partner Sourcing
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="service-description">
                  {props.serviceDescription4 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text20">
                        Leverage our network and expertise to find reliable
                        suppliers or buyers and facilitate successful market
                        entry.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </article>
          <article className="service-card-featured service-card">
            <div className="service-card-inner">
              <div className="service-icon-wrapper">
                <div className="icon-background"></div>
                <div className="service-icon">
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
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {props.serviceTitle5 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text11">
                        15+ Years of Industry Expertise
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="service-description">
                  {props.serviceDescription5 ?? (
                    <Fragment>
                      <span className="logistics-services-section-text13">
                        Our specialists possess deep regulatory and market
                        knowledge across diverse product categories and regions.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

LogisticsServicesSection.defaultProps = {
  serviceTitle5: undefined,
  serviceDescription: undefined,
  serviceDescription5: undefined,
  serviceTitle1: undefined,
  serviceDescription1: undefined,
  serviceTitle4: undefined,
  serviceTitle2: undefined,
  serviceDescription3: undefined,
  serviceDescription2: undefined,
  logisticsServicesSectionId: '',
  serviceDescription4: undefined,
  serviceTitle: undefined,
  serviceTitle3: undefined,
}

LogisticsServicesSection.propTypes = {
  serviceTitle5: PropTypes.element,
  serviceDescription: PropTypes.element,
  serviceDescription5: PropTypes.element,
  serviceTitle1: PropTypes.element,
  serviceDescription1: PropTypes.element,
  serviceTitle4: PropTypes.element,
  serviceTitle2: PropTypes.element,
  serviceDescription3: PropTypes.element,
  serviceDescription2: PropTypes.element,
  logisticsServicesSectionId: PropTypes.string,
  serviceDescription4: PropTypes.element,
  serviceTitle: PropTypes.element,
  serviceTitle3: PropTypes.element,
}

export default LogisticsServicesSection
