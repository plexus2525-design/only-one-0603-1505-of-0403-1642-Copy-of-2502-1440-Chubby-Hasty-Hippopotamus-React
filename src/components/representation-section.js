import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './representation-section.css'

const RepresentationSection = (props) => {
  return (
    <section className="representation-section-thq-representation-section-elm representation-section">
      <section className="global-rep-hero">
        <div className="hero-container">
          <div className="hero-content-wrapper">
            <div className="hero-badge">
              <span className="your-global-representative-badge-icon badge-icon">
                {props.badgeIcon ?? (
                  <Fragment>
                    <span className="representation-section-thq-badge-icon-elm5 your-global-representative-badge-icon badge-icon">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1.5 0a6.5 6.5 0 1 1-11-4.69v.447a3.5 3.5 0 0 0 1.025 2.475L8.293 10L8 10.293a1 1 0 0 0 0 1.414l1.06 1.06a1.5 1.5 0 0 1 .44 1.061v.363a1 1 0 0 0 .553.894l.276.139a1 1 0 0 0 1.342-.448l1.454-2.908a1.5 1.5 0 0 0-.281-1.731l-.772-.772a1 1 0 0 0-1.023-.242l-.384.128a.5.5 0 0 1-.606-.25l-.296-.592a.481.481 0 0 1 .646-.646l.262.131a1 1 0 0 0 .447.106h.188a1 1 0 0 0 .949-1.316l-.068-.204a.5.5 0 0 1 .149-.538l1.44-1.234A6.5 6.5 0 0 1 16.5 10"
                          fill="currentColor"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="your-global-representative-badge-text">
                {props.badgeText ?? (
                  <Fragment>
                    <span className="representation-section-text143">
                      Your Voice in Global Markets
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <h1 className="hero-headline">
              {props.heroHeadline ?? (
                <Fragment>
                  <span className="representation-section-thq-hero-headline-elm2 hero-headline">
                    <span>
                      {' '}
                      Your Global Representative:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="representation-section-thq-text-accent-span-elm">
                      We Speak for You,
                    </span>
                    <span>
                      {' '}
                      So You Don&apos;t Have to Travel
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero-subheadline">
              {props.heroSubheadline ?? (
                <Fragment>
                  <span className="representation-section-text139">
                    Beyond logistics. We act as your authorized representative
                    on the ground—negotiating deals, inspecting shipments, and
                    managing every document, so you can focus on growing your
                    business from home.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="your-global-representative-hero-cta-group3 hero-cta-group">
              <a href="#contact">
                <div className="btn-primary-custom">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="representation-section-text185">
                          Partner With Us
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <Link to="/services">
                <div className="representation-section-thq-btn-outline-custom-elm btn-outline-custom">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="representation-section-text189">
                          Explore Services
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </Link>
            </div>
            <div className="trust-indicators">
              <div className="trust-item your-global-representative-trust-item">
                <div className="trust-icon-box">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <span className="trust-label">
                  {props.trustLabel ?? (
                    <Fragment>
                      <span className="representation-section-text183">
                        Authorized Legal Agent
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="trust-item your-global-representative-trust-item">
                <div className="trust-icon-box">
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
                      <path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004zm.123-5.776A1 1 0 0 1 14 7V2"></path>
                      <path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516M8 18h1"></path>
                    </g>
                  </svg>
                </div>
                <span className="trust-label">
                  {props.trustLabel1 ?? (
                    <Fragment>
                      <span className="representation-section-text174">
                        Direct Negotiations
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="hero-visual-wrapper">
            <div className="image-frame">
              <img
                alt={props.heroMainImageAlt}
                src={props.heroMainImageSrc}
                className="hero-main-image"
              />
              <div className="floating-data-card top-right">
                <div className="stat-circle">
                  <span>
                    {props.text5 ?? (
                      <Fragment>
                        <span className="representation-section-text170">
                          100%
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="stat-text">
                  <span>
                    {props.text6 ?? (
                      <Fragment>
                        <span className="representation-section-text167">
                          On-Ground Presence
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="bottom-left floating-data-card">
                <div className="pulse-ring"></div>
                <div className="stat-text">
                  <span>
                    {props.text7 ?? (
                      <Fragment>
                        <span className="representation-section-text186">
                          Local Representation
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="geometric-decoration"></div>
          </div>
        </div>
      </section>
      <div className="representation-section-container10">
        <div className="representation-section-container11">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translate(-50%, -50%);}
50% {transform: translate(-50%, -60%);}}@keyframes pulse {0% {transform: scale(1);
opacity: 0.8;}
100% {transform: scale(3);
opacity: 0;}}@keyframes dash {to {stroke-dashoffset: -100;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container12">
        <div className="representation-section-container13">
          <Script
            html={`<script>
(function(){
  // Simple interaction to highlight map nodes on hover of text or other triggers
  const nodes = document.querySelectorAll(".floating-data-node")
  nodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      node.style.transform = "scale(1.1)"
      node.style.borderColor = "var(--color-accent)"
    })
    node.addEventListener("mouseleave", () => {
      node.style.transform = "scale(1)"
      node.style.borderColor = "rgba(255, 255, 255, 0.1)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="representation-container">
        <header className="representation-header">
          <div className="badge-container">
            <span className="page-strategic-hero-badge strategic-hero-badge">
              {props.strategicHeroBadge ?? (
                <Fragment>
                  <span className="representation-section-text188">
                    Full-Cycle Representation
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <h2 className="page-strategic-hero-headline strategic-hero-headline">
            {props.strategicHeroHeadline ?? (
              <Fragment>
                <span className="representation-section-thq-strategic-hero-headline-elm2 page-strategic-hero-headline strategic-hero-headline">
                  <span>
                    {' '}
                    We Go Where You Can&apos;t.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    We Do What You&apos;d Do—
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="representation-section-thq-text-accent-elm2">
                    Only Better.
                  </span>
                </span>
              </Fragment>
            )}
          </h2>
          <p className="strategic-hero-subheadline page-strategic-hero-subheadline">
            {props.strategicHeroSubheadline ?? (
              <Fragment>
                <span className="representation-section-text197">
                  From the first handshake to the final delivery, we act in your
                  name and protect your interests at every step.
                </span>
              </Fragment>
            )}
          </p>
        </header>
        <div className="comparison-grid">
          <div className="comparison-track">
            <div className="client-side comparison-card">
              <div className="image-wrapper">
                <img
                  alt={props.splitImageAlt}
                  src={props.splitImageSrc}
                  className="split-image"
                />
                <div className="image-overlay client-overlay"></div>
                <div className="label-tag">
                  <span>
                    {props.text8 ?? (
                      <Fragment>
                        <span className="representation-section-text176">
                          Your Office
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="side-title">
                  {props.sideTitle ?? (
                    <Fragment>
                      <span className="representation-section-text146">
                        Strategy &amp; Oversight
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="side-text">
                  {props.sideText ?? (
                    <Fragment>
                      <span className="representation-section-text178">
                        You maintain control and focus on growth while we
                        execute the ground-level complexities of your supply
                        chain.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="connection-hub">
              <div className="pulse-line"></div>
              <div className="hub-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"></path>
                </svg>
              </div>
              <div className="pulse-line"></div>
            </div>
            <div className="comparison-card agent-side">
              <div className="image-wrapper">
                <img
                  alt={props.splitImageAlt1}
                  src={props.splitImageSrc1}
                  className="split-image"
                />
                <div className="image-overlay agent-overlay"></div>
                <div className="label-tag">
                  <span>
                    {props.text9 ?? (
                      <Fragment>
                        <span className="representation-section-text164">
                          On-Site Presence
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="side-title">
                  {props.sideTitle1 ?? (
                    <Fragment>
                      <span className="representation-section-text151">
                        Expert Execution
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="side-text">
                  {props.sideText1 ?? (
                    <Fragment>
                      <span className="representation-section-text163">
                        Our agents are your eyes and ears on the factory floor,
                        ensuring compliance and quality in real-time.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-grid">
          <div className="page-feature-item">
            <div className="feature-icon-box">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">
                {props.featureTitle ?? (
                  <Fragment>
                    <span className="representation-section-text132">
                      Supplier Visits &amp; Audits
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="feature-description">
                {props.featureDescription ?? (
                  <Fragment>
                    <span className="representation-section-text155">
                      We travel to factories and farms to verify capabilities,
                      inspect facilities, and ensure your partner is reliable
                      before you commit.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="page-feature-item">
            <div className="feature-icon-box">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="8" y="2" rx="1" ry="1" width="8" height="4"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14l2 2l4-4"></path>
                </g>
              </svg>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">
                {props.featureTitle1 ?? (
                  <Fragment>
                    <span className="representation-section-text135">
                      Cargo Supervision
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="feature-description">
                {props.featureDescription1 ?? (
                  <Fragment>
                    <span className="representation-section-text215">
                      Our team is present during loading and stuffing to verify
                      quantities, check packaging, and document the process with
                      photos and reports.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="page-feature-item">
            <div className="feature-icon-box">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">
                {props.featureTitle2 ?? (
                  <Fragment>
                    <span className="representation-section-text195">
                      Quality Checks
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="feature-description">
                {props.featureDescription2 ?? (
                  <Fragment>
                    <span className="representation-section-text133">
                      We conduct basic quality assessments and coordinate with
                      third-party inspectors if deeper certification is
                      required.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="page-feature-item">
            <div className="feature-icon-box">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
            <div className="feature-text">
              <h4 className="feature-title">
                {props.featureTitle3 ?? (
                  <Fragment>
                    <span className="representation-section-text171">
                      Shipment Coordination
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="feature-description">
                {props.featureDescription3 ?? (
                  <Fragment>
                    <span className="representation-section-text211">
                      We manage the entire loading process, ensuring your cargo
                      is handled correctly and departs on schedule.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="action-footer">
          <button className="btn-primary btn btn-xl">
            <span>
              {props.btn ?? (
                <Fragment>
                  <span className="representation-section-text131">
                    Request Site Inspection
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="representation-section-container14">
        <div className="representation-section-container15">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);}
70% {transform: scale(1);
box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);}
100% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);}}@keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}@keyframes drawLine {to {stroke-dashoffset: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container16">
        <div className="representation-section-container17">
          <Script
            html={`<script>
(function(){
  // Simple parallax effect for the map container
  const heroSection = document.querySelector(".strategic-hero")
  const mapWrapper = document.querySelector(".strategic-map-wrapper")

  if (heroSection && mapWrapper) {
    heroSection.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 40
      const yAxis = (window.innerHeight / 2 - e.pageY) / 40

      // Smoothly apply rotation while keeping the original perspective
      mapWrapper.style.transform = \`rotateY(\${xAxis - 5}deg) rotateX(\${yAxis + 5}deg)\`
    })

    // Reset rotation on mouse leave
    heroSection.addEventListener("mouseleave", () => {
      mapWrapper.style.transition = "all 0.5s ease"
      mapWrapper.style.transform = \`rotateY(-5deg) rotateX(5deg)\`

      setTimeout(() => {
        mapWrapper.style.transition = "none"
      }, 500)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="negotiation-section">
        <div className="negotiation-bg-wrapper">
          <video
            src={props.negotiationVideoSrc}
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="negotiation-video"
          ></video>
          <div className="negotiation-overlay"></div>
        </div>
        <div className="negotiation-container">
          <div className="negotiation-grid">
            <div className="negotiation-content">
              <div className="negotiation-badge">
                <span className="badge-icon">
                  {props.badgeIcon2 ?? (
                    <Fragment>
                      <span className="representation-section-thq-badge-icon-elm8 badge-icon">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle r="10" cx="12" cy="12"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text2 ?? (
                    <Fragment>
                      <span className="representation-section-text193">
                        {' '}
                        Global Communication
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h2 className="negotiation-headline">
                {props.negotiationHeadline ?? (
                  <Fragment>
                    <span className="representation-section-text190">
                      We Speak Their Language—So You Don&apos;t Have to Wonder
                      What Was Said
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="negotiation-subheadline">
                {props.negotiationSubheadline ?? (
                  <Fragment>
                    <span className="representation-section-text203">
                      Cross-cultural deals succeed when communication is clear.
                      Our team handles negotiations, correspondence, and
                      conflict resolution in English, Chinese, Spanish,
                      Portuguese, Russian, and more.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="points-grid">
                <div id="point-1" className="point-card">
                  <div className="point-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="point-text">
                    <h3 className="point-title">
                      {props.pointTitle ?? (
                        <Fragment>
                          <span className="representation-section-text138">
                            Commercial Negotiations
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="point-desc">
                      {props.pointDesc ?? (
                        <Fragment>
                          <span className="representation-section-text196">
                            We negotiate pricing, terms, and Incoterms directly
                            with suppliers or buyers on your behalf.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div id="point-2" className="point-card">
                  <div className="point-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 8 6 6"></path>
                      <path d="m4 14 6-6 2-3"></path>
                      <path d="M2 5h12"></path>
                      <path d="M7 2h1"></path>
                      <path d="m22 22-5-10-5 10"></path>
                      <path d="M14 18h6"></path>
                    </svg>
                  </div>
                  <div className="point-text">
                    <h3 className="point-title">
                      {props.pointTitle1 ?? (
                        <Fragment>
                          <span className="representation-section-text149">
                            Native-Level Fluency
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="point-desc">
                      {props.pointDesc1 ?? (
                        <Fragment>
                          <span className="representation-section-text152">
                            Our team includes native speakers who understand
                            cultural nuances and unspoken rules.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div id="point-3" className="point-card">
                  <div className="point-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      <path d="M8 9h8"></path>
                      <path d="M8 13h6"></path>
                    </svg>
                  </div>
                  <div className="point-text">
                    <h3 className="point-title">
                      {props.pointTitle2 ?? (
                        <Fragment>
                          <span className="representation-section-text180">
                            Real-Time Updates
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="point-desc">
                      {props.pointDesc2 ?? (
                        <Fragment>
                          <span className="representation-section-text169">
                            Clear, jargon-free summaries of every conversation
                            in your preferred language.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div id="point-4" className="point-card">
                  <div className="point-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="point-text">
                    <h3 className="point-title">
                      {props.pointTitle3 ?? (
                        <Fragment>
                          <span className="representation-section-text156">
                            Conflict Resolution
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="point-desc">
                      {props.pointDesc3 ?? (
                        <Fragment>
                          <span className="representation-section-text214">
                            We mediate and protect your position before small
                            issues become costly problems.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="negotiation-visual">
              <div className="map-stage">
                <div className="floating-bubbles">
                  <div className="bubble-1 bubble">
                    <span>
                      {props.text14 ?? (
                        <Fragment>
                          <span className="representation-section-text173">
                            你好
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bubble-2 bubble">
                    <span>
                      {props.text15 ?? (
                        <Fragment>
                          <span className="representation-section-text158">
                            Hola
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bubble bubble-3">
                    <span>
                      {props.text16 ?? (
                        <Fragment>
                          <span className="representation-section-text153">
                            Hello
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bubble-4 bubble">
                    <span>
                      {props.text17 ?? (
                        <Fragment>
                          <span className="representation-section-text137">
                            Olá
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bubble-5 bubble">
                    <span>
                      {props.text18 ?? (
                        <Fragment>
                          <span className="representation-section-text200">
                            Привет
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="map-connection-lines">
                  <svg viewBox="0 0 400 300" className="connection-svg">
                    <path
                      d="M50,150 Q200,50 350,150"
                      className="path-1 path-line"
                    ></path>
                    <path
                      d="M50,150 Q200,250 350,150"
                      className="path-2 path-line"
                    ></path>
                    <circle
                      r="5"
                      cx="50"
                      cy="150"
                      className="map-node"
                    ></circle>
                    <circle
                      r="5"
                      cx="350"
                      cy="150"
                      className="map-node"
                    ></circle>
                    <circle
                      r="3"
                      cx="200"
                      cy="100"
                      className="map-node node-pulse"
                    ></circle>
                  </svg>
                </div>
                <img
                  alt={props.visualImgAlt}
                  src={props.visualImgSrc}
                  className="visual-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="representation-section-container18">
        <div className="representation-section-container19">
          <Script
            html={`<style>
        @keyframes float-bubble {0%,100% {transform: translateY(0) scale(1);
opacity: 0.9;}
50% {transform: translateY(-20px) scale(1.05);
opacity: 1;}}@keyframes draw-line {0% {stroke-dashoffset: 1000;}
50% {stroke-dashoffset: 0;}
100% {stroke-dashoffset: -1000;}}@keyframes pulse-node {0% {r: 3;
opacity: 1;}
100% {r: 10;
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container20">
        <div className="representation-section-container21">
          <Script
            html={`<script>
(function(){
  // Interaction for point cards to highlight visual elements
  const pointCards = [document.getElementById("point-1"), document.getElementById("point-2"), document.getElementById("point-3"), document.getElementById("point-4")]

  pointCards.forEach((card, index) => {
    if (card) {
      card.addEventListener("mouseenter", () => {
        // Highlight specific bubbles or nodes based on card hovered
        const bubbles = document.querySelectorAll(".bubble")
        bubbles.forEach((b, i) => {
          if (i === index) {
            b.style.transform = "scale(1.4)"
            b.style.zIndex = "10"
            b.style.background = "var(--color-accent)"
            b.style.color = "white"
          } else {
            b.style.opacity = "0.3"
          }
        })
      })

      card.addEventListener("mouseleave", () => {
        const bubbles = document.querySelectorAll(".bubble")
        bubbles.forEach((b) => {
          b.style.transform = ""
          b.style.zIndex = ""
          b.style.background = ""
          b.style.color = ""
          b.style.opacity = "0.9"
        })
      })
    }
  })

  // Parallax effect on bubbles based on mouse movement
  const visualStage = document.querySelector(".map-stage")
  if (visualStage) {
    visualStage.addEventListener("mousemove", (e) => {
      const bubbles = document.querySelectorAll(".bubble")
      const { width, height } = visualStage.getBoundingClientRect()
      const offX = (e.clientX - width / 2) / 25
      const offY = (e.clientY - height / 2) / 25

      bubbles.forEach((bubble, i) => {
        const speed = (i + 1) * 0.5
        bubble.style.transform = \`translate(\${offX * speed}px, \${offY * speed}px)\`
      })
    })

    visualStage.addEventListener("mouseleave", () => {
      const bubbles = document.querySelectorAll(".bubble")
      bubbles.forEach((bubble) => {
        bubble.style.transform = "translate(0, 0)"
      })
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="doc-management-section">
        <div className="doc-container">
          <div className="doc-content-wrapper">
            <div className="doc-text-block">
              <div className="doc-badge">
                <span>
                  {props.text3 ?? (
                    <Fragment>
                      <span className="representation-section-text157">
                        Global Compliance
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h2 className="doc-headline">
                {props.docHeadline ?? (
                  <Fragment>
                    <span className="representation-section-thq-doc-headline-elm2 doc-headline">
                      <span>
                        {' '}
                        Your Paperwork, Perfected.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span className="representation-section-thq-doc-highlight-elm">
                        Every Language. Every Signature.
                      </span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="doc-subheadline">
                {props.docSubheadline ?? (
                  <Fragment>
                    <span className="representation-section-text191">
                      International trade runs on paper. We ensure every
                      contract, invoice, and certificate is accurate, compliant,
                      and professionally prepared in the required language.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="doc-features-grid">
                <div className="doc-feature-item">
                  <div className="doc-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    </svg>
                  </div>
                  <div className="doc-feature-text">
                    <h3 className="doc-feature-title">
                      {props.docFeatureTitle ?? (
                        <Fragment>
                          <span className="representation-section-text181">
                            Sales &amp; Purchase Contracts
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="doc-feature-desc">
                      {props.docFeatureDesc ?? (
                        <Fragment>
                          <span className="representation-section-text168">
                            Expert drafting, review, and finalization of
                            agreements with global suppliers and buyers.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div className="doc-feature-item">
                  <div className="doc-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </svg>
                  </div>
                  <div className="doc-feature-text">
                    <h3 className="doc-feature-title">
                      {props.docFeatureTitle1 ?? (
                        <Fragment>
                          <span className="representation-section-text207">
                            Carrier &amp; Service Agreements
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="doc-feature-desc">
                      {props.docFeatureDesc1 ?? (
                        <Fragment>
                          <span className="representation-section-text150">
                            Handling all contracts with freight forwarders,
                            shipping lines, and insurance providers.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div className="doc-feature-item">
                  <div className="doc-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"></path>
                    </svg>
                  </div>
                  <div className="doc-feature-text">
                    <h3 className="doc-feature-title">
                      {props.docFeatureTitle2 ?? (
                        <Fragment>
                          <span className="representation-section-text187">
                            Multilingual Documentation
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="doc-feature-desc">
                      {props.docFeatureDesc2 ?? (
                        <Fragment>
                          <span className="representation-section-text179">
                            Documents prepared in English, local languages, or
                            bilingual formats for local authorities.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div className="doc-feature-item">
                  <div className="doc-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div className="doc-feature-text">
                    <h3 className="doc-feature-title">
                      {props.docFeatureTitle3 ?? (
                        <Fragment>
                          <span className="representation-section-text161">
                            Export/Import Compliance
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="doc-feature-desc">
                      {props.docFeatureDesc3 ?? (
                        <Fragment>
                          <span className="representation-section-text154">
                            Precise management of certificates of origin,
                            licenses, and complex permits.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="doc-cta-area">
                <div className="doc-banking-support">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1"></path>
                  </svg>
                  <span>
                    {props.text10 ?? (
                      <Fragment>
                        <span className="representation-section-text162">
                          Legal &amp; Banking Support: Letters of credit and
                          bank documentation included.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="doc-visual-block">
              <div className="doc-visual-stack">
                <div className="doc-card-main">
                  <div className="doc-card-header">
                    <div className="doc-lang-pills">
                      <span className="lang-pill active">
                        {props.langPill ?? (
                          <Fragment>
                            <span className="representation-section-text192">
                              EN
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="lang-pill">
                        {props.langPill1 ?? (
                          <Fragment>
                            <span className="representation-section-text210">
                              CN
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="lang-pill">
                        {props.langPill2 ?? (
                          <Fragment>
                            <span className="representation-section-text175">
                              ES
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="lang-pill">
                        {props.langPill3 ?? (
                          <Fragment>
                            <span className="representation-section-text182">
                              AR
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="doc-status-pill">
                      <span>
                        {props.text23 ?? (
                          <Fragment>
                            <span className="representation-section-text213">
                              Verified
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="doc-card-body">
                    <div className="title doc-skeleton-line"></div>
                    <div className="doc-skeleton-line"></div>
                    <div className="doc-skeleton-line"></div>
                    <div className="short doc-skeleton-line"></div>
                    <div className="doc-skeleton-line"></div>
                    <div className="doc-skeleton-line"></div>
                    <div className="doc-signature-area">
                      <div className="sign doc-skeleton-line"></div>
                      <div className="doc-stamp-circle">
                        <span>
                          {props.text26 ?? (
                            <Fragment>
                              <span className="representation-section-text165">
                                APPROVED
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="float-1 doc-card-floating">
                  <div className="float-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    </svg>
                  </div>
                  <div className="float-text">
                    <span>
                      {props.text19 ?? (
                        <Fragment>
                          <span className="representation-section-text159">
                            Bill of Lading
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="float-2 doc-card-floating">
                  <div className="float-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div className="float-text">
                    <span>
                      {props.text20 ?? (
                        <Fragment>
                          <span className="representation-section-text184">
                            Customs Permit
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="doc-image-bg">
                  <img alt={props.imageAlt} src={props.imageSrc} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="representation-section-container22">
        <div className="representation-section-container23">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container24">
        <div className="representation-section-container25">
          <Script
            html={`<script>
(function(){
  // Interactive Document Management Section
  const docCard = document.getElementById("doc-card-main")

  if (docCard) {
    docCard.addEventListener("mousemove", (e) => {
      const rect = docCard.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      docCard.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale(1.02)\`
    })

    docCard.addEventListener("mouseleave", () => {
      docCard.style.transform = \`perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1)\`
    })
  }

  // Simple language pill toggle simulation
  const pills = document.querySelectorAll(".lang-pill")
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"))
      pill.classList.add("active")

      // Animate lines to simulate content changing
      const lines = document.querySelectorAll(".doc-skeleton-line")
      lines.forEach((line) => {
        line.style.opacity = "0.3"
        setTimeout(() => {
          line.style.opacity = "1"
        }, 300)
      })
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="one-stop-advantage" className="advantage-section">
        <div className="advantage-video-container">
          <video
            src={props.advantageVideoSrc}
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="advantage-video"
          ></video>
          <div className="advantage-overlay"></div>
        </div>
        <div className="advantage-content-wrapper">
          <div className="advantage-header">
            <div className="advantage-badge">
              <span className="badge-icon">
                {props.badgeIcon1 ?? (
                  <Fragment>
                    <span className="representation-section-thq-badge-icon-elm7 badge-icon">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                      </svg>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="badge-text">
                {props.badgeText1 ?? (
                  <Fragment>
                    <span className="representation-section-text201">
                      The One-Stop Advantage
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <h2 className="advantage-headline">
              {props.advantageHeadline ?? (
                <Fragment>
                  <span className="representation-section-thq-advantage-headline-elm2 advantage-headline">
                    <span>
                      {' '}
                      One Partner. One Point of Contact.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span className="representation-section-thq-text-accent-elm1">
                      Total Peace of Mind.
                    </span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="advantage-subheadline">
              {props.advantageSubheadline ?? (
                <Fragment>
                  <span className="representation-section-text198">
                    No more juggling translators, agents, forwarders, and
                    inspectors. Waterside is your single, integrated team for
                    trade representation, logistics, and documentation.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="advantage-grid">
            <div className="advantage-visual-box">
              <div className="image-mask">
                <img
                  alt={props.advantageImageAlt}
                  src={props.advantageImageSrc}
                  className="advantage-image"
                />
              </div>
              <div className="experience-card">
                <div className="experience-number">
                  <span>
                    {props.text11 ?? (
                      <Fragment>
                        <span className="representation-section-text177">
                          24/7
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="experience-label">
                  <span>
                    {props.text12 ?? (
                      <Fragment>
                        <span className="representation-section-text206">
                          Global Support
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="advantage-text-box">
              <div className="summary-card">
                <p className="summary-text">
                  {props.summaryText ?? (
                    <Fragment>
                      <span className="representation-section-thq-summary-text-elm2 summary-text">
                        <span>
                          {' '}
                          You stay home.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="representation-section-text141">
                          We go global.
                        </span>
                        <span>
                          {' '}
                          While you focus on your core business—sales,
                          production, strategy—we manage the entire
                          international front.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="page-process-steps">
                  <div className="page-process-step">
                    <div className="step-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div className="step-info">
                      <h4 className="page-step-title">
                        {props.stepTitle ?? (
                          <Fragment>
                            <span className="representation-section-text160">
                              Finding Partners
                            </span>
                          </Fragment>
                        )}
                      </h4>
                      <p className="step-desc">
                        {props.stepDesc ?? (
                          <Fragment>
                            <span className="representation-section-text134">
                              Strategic sourcing and vetting.
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="page-process-step">
                    <div className="step-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </div>
                    <div className="step-info">
                      <h4 className="page-step-title">
                        {props.stepTitle1 ?? (
                          <Fragment>
                            <span className="representation-section-text130">
                              Shaking Hands
                            </span>
                          </Fragment>
                        )}
                      </h4>
                      <p className="step-desc">
                        {props.stepDesc1 ?? (
                          <Fragment>
                            <span className="representation-section-text220">
                              Negotiation and deal closure.
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="page-process-step">
                    <div className="step-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="step-info">
                      <h4 className="page-step-title">
                        {props.stepTitle2 ?? (
                          <Fragment>
                            <span className="representation-section-text204">
                              Final Delivery
                            </span>
                          </Fragment>
                        )}
                      </h4>
                      <p className="step-desc">
                        {props.stepDesc2 ?? (
                          <Fragment>
                            <span className="representation-section-text166">
                              Inspected and documented.
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="summary-footer">
                  {props.summaryFooter ?? (
                    <Fragment>
                      <span className="representation-section-thq-summary-footer-elm2 summary-footer">
                        <span>
                          {' '}
                          From finding the right partner to shaking hands on the
                          deal, from inspecting the cargo to handing you the
                          final delivery documents,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="representation-section-text209">
                          we are your boots on the ground and your pen on the
                          contract.
                        </span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="representation-section-container26">
        <div className="representation-section-container27">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container28">
        <div className="representation-section-container29">
          <Script
            html={`<script>
(function(){
  // Scroll animation reveal
  const observerOptions = {
    threshold: 0.1,
  }

  const advantageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const contentWrapper = document.getElementById("one-stop-advantage")
  if (contentWrapper) {
    const sections = contentWrapper.querySelectorAll(".advantage-header, .advantage-visual-box, .advantage-text-box")
    sections.forEach((section) => {
      section.style.opacity = "0"
      section.style.transform = "translateY(30px)"
      section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      advantageObserver.observe(section)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="cta-representative" className="cta-representation-wrapper">
        <div className="cta-background-decoration">
          <div className="orb-1 glow-orb"></div>
          <div className="orb-2 glow-orb"></div>
        </div>
        <div className="cta-container">
          <div className="cta-content-grid">
            <div className="cta-text-content">
              <div className="cta-badge">
                <span className="badge-icon">
                  {props.badgeIcon3 ?? (
                    <Fragment>
                      <span className="representation-section-thq-badge-icon-elm6 badge-icon">
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
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text4 ?? (
                    <Fragment>
                      <span className="representation-section-text194">
                        {' '}
                        Global Presence, Local Expertise
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h2 className="cta-headline">
                {props.ctaHeadline ?? (
                  <Fragment>
                    <span className="representation-section-thq-cta-headline-elm2 cta-headline">
                      <span>
                        {' '}
                        Ready to Stop Traveling and
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="representation-section-thq-text-highlight-elm">
                        Start Growing?
                      </span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="cta-subheadline">
                {props.ctaSubheadline ?? (
                  <Fragment>
                    <span className="representation-section-text136">
                      Stop managing time zones and start scaling your
                      operations. Let&apos;s discuss how we can represent your
                      interests anywhere in the world with a dedicated
                      specialist.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="cta-actions">
                <button
                  id="cta-main-btn"
                  className="btn-primary cta-button btn-xl"
                >
                  <span>
                    {props.text13 ?? (
                      <Fragment>
                        <span className="representation-section-text212">
                          Contact Your Dedicated Representative
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                </button>
                <div className="cta-trust-indicators">
                  <div className="trust-item">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                    <span>
                      {props.text21 ?? (
                        <Fragment>
                          <span className="representation-section-text219">
                            1:1 Dedicated Support
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="trust-item">
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
                        <path d="m12 16l4-4l-4-4m-4 4h8"></path>
                      </g>
                    </svg>
                    <span>
                      {props.text22 ?? (
                        <Fragment>
                          <span className="representation-section-text129">
                            Response within 2 hours
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-visual-container">
              <div className="image-stack">
                <div className="image-card main-image">
                  <img alt={props.imageAlt1} src={props.imageSrc1} />
                  <div className="image-overlay-card">
                    <div className="avatar-group">
                      <div className="avatar"></div>
                      <div className="avatar"></div>
                      <div className="avatar"></div>
                      <div className="avatar-plus">
                        <span>
                          {props.text27 ?? (
                            <Fragment>
                              <span className="representation-section-text218">
                                +12
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                    <p className="overlay-text">
                      {props.overlayText ?? (
                        <Fragment>
                          <span className="representation-section-text144">
                            Your global team is ready.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <div className="floating-stat-card">
                  <div className="stat-icon">
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
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="page-stat-value">
                      <span>
                        {props.text24 ?? (
                          <Fragment>
                            <span className="representation-section-text202">
                              50+
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="page-stat-label">
                      <span>
                        {props.text25 ?? (
                          <Fragment>
                            <span className="representation-section-text199">
                              Countries Covered
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="representation-section-container31">
        <div className="representation-section-container32">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container33">
        <div className="representation-section-container34">
          <Script
            html={`<script>
(function(){
  // Handle CTA button interaction
  const ctaBtn = document.getElementById("cta-main-btn")

  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      // Visual feedback on click
      ctaBtn.style.transform = "scale(0.95)"
      setTimeout(() => {
        ctaBtn.style.transform = ""
        console.log("Representative contact initiated")
        // In a real scenario, this would open a modal or scroll to a form
      }, 150)
    })
  }

  // Subtle parallax effect on the floating elements
  window.addEventListener("mousemove", (e) => {
    const statCard = document.querySelector(".floating-stat-card")
    const overlayCard = document.querySelector(".image-overlay-card")

    if (statCard && overlayCard) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01

      statCard.style.transform = \`translate(\${moveX}px, \${moveY}px)\`
      overlayCard.style.transform = \`translate(\${-moveX}px, \${-moveY}px)\`
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container35">
        <div className="representation-section-container36">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);}
70% {transform: scale(1);
box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);}
100% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);}}@keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}@keyframes drawLine {to {stroke-dashoffset: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container37">
        <div className="representation-section-container38">
          <Script
            html={`<script>
(function(){
  // Simple parallax effect for the map container
  const heroSection = document.querySelector(".strategic-hero")
  const mapWrapper = document.querySelector(".strategic-map-wrapper")

  if (heroSection && mapWrapper) {
    heroSection.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 40
      const yAxis = (window.innerHeight / 2 - e.pageY) / 40

      // Smoothly apply rotation while keeping the original perspective
      mapWrapper.style.transform = \`rotateY(\${xAxis - 5}deg) rotateX(\${yAxis + 5}deg)\`
    })

    // Reset rotation on mouse leave
    heroSection.addEventListener("mouseleave", () => {
      mapWrapper.style.transition = "all 0.5s ease"
      mapWrapper.style.transform = \`rotateY(-5deg) rotateX(5deg)\`

      setTimeout(() => {
        mapWrapper.style.transition = "none"
      }, 500)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container39">
        <div className="representation-section-container40">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translate(-50%, -50%);}
50% {transform: translate(-50%, -60%);}}@keyframes pulse {0% {transform: scale(1);
opacity: 0.8;}
100% {transform: scale(3);
opacity: 0;}}@keyframes dash {to {stroke-dashoffset: -100;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container41">
        <div className="representation-section-container42">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(1);
opacity: 0.8;}
100% {transform: scale(3);
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container43">
        <div className="representation-section-container44">
          <Script
            html={`<script>
(function(){
  // Simple interaction to highlight map nodes on hover of text or other triggers
  const nodes = document.querySelectorAll(".floating-data-node")
  nodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      node.style.transform = "scale(1.1)"
      node.style.borderColor = "var(--color-accent)"
    })
    node.addEventListener("mouseleave", () => {
      node.style.transform = "scale(1)"
      node.style.borderColor = "rgba(255, 255, 255, 0.1)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="representation-section-container45">
        <div className="representation-section-container46">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(1);
opacity: 0.8;}
100% {transform: scale(3);
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
    </section>
  )
}

RepresentationSection.defaultProps = {
  text22: undefined,
  stepTitle1: undefined,
  splitImageSrc:
    'https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&w=1500',
  btn: undefined,
  featureTitle: undefined,
  featureDescription2: undefined,
  stepDesc: undefined,
  featureTitle1: undefined,
  ctaSubheadline: undefined,
  text17: undefined,
  pointTitle: undefined,
  heroSubheadline: undefined,
  imageAlt1: 'Friendly professional team collaborating',
  summaryText: undefined,
  badgeText: undefined,
  overlayText: undefined,
  advantageHeadline: undefined,
  sideTitle: undefined,
  strategicHeroHeadline: undefined,
  pointTitle1: undefined,
  heroMainImageAlt: 'Global Business Handshake',
  docFeatureDesc1: undefined,
  sideTitle1: undefined,
  advantageVideoSrc:
    'https://videos.pexels.com/video-files/15547447/15547447-hd_1920_1080_24fps.mp4',
  pointDesc1: undefined,
  text16: undefined,
  docFeatureDesc3: undefined,
  featureDescription: undefined,
  pointTitle3: undefined,
  text3: undefined,
  badgeIcon: undefined,
  negotiationVideoSrc:
    'https://videos.pexels.com/video-files/3129785/3129785-hd_1920_1080_25fps.mp4',
  text15: undefined,
  text19: undefined,
  stepTitle: undefined,
  docFeatureTitle3: undefined,
  text10: undefined,
  sideText1: undefined,
  advantageImageAlt: 'Professional Partnership',
  text9: undefined,
  text26: undefined,
  stepDesc2: undefined,
  text6: undefined,
  docFeatureDesc: undefined,
  pointDesc2: undefined,
  text5: undefined,
  featureTitle3: undefined,
  imageSrc:
    'https://images.pexels.com/photos/8205064/pexels-photo-8205064.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ctaHeadline: undefined,
  text14: undefined,
  trustLabel1: undefined,
  langPill2: undefined,
  text8: undefined,
  badgeIcon3: undefined,
  text11: undefined,
  sideText: undefined,
  docFeatureDesc2: undefined,
  pointTitle2: undefined,
  docFeatureTitle: undefined,
  langPill3: undefined,
  trustLabel: undefined,
  text20: undefined,
  visualImgAlt: 'Negotiation',
  text: undefined,
  text7: undefined,
  imageSrc1:
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
  docFeatureTitle2: undefined,
  strategicHeroBadge: undefined,
  text1: undefined,
  negotiationHeadline: undefined,
  docSubheadline: undefined,
  langPill: undefined,
  text2: undefined,
  text4: undefined,
  badgeIcon1: undefined,
  featureTitle2: undefined,
  pointDesc: undefined,
  visualImgSrc:
    'https://images.pexels.com/photos/6930300/pexels-photo-6930300.jpeg?auto=compress&cs=tinysrgb&w=1500',
  strategicHeroSubheadline: undefined,
  advantageSubheadline: undefined,
  text25: undefined,
  text18: undefined,
  badgeText1: undefined,
  text24: undefined,
  negotiationSubheadline: undefined,
  stepTitle2: undefined,
  docHeadline: undefined,
  text12: undefined,
  splitImageSrc1:
    'https://images.pexels.com/photos/35383622/pexels-photo-35383622.jpeg?auto=compress&cs=tinysrgb&w=1500',
  docFeatureTitle1: undefined,
  summaryFooter: undefined,
  imageAlt: 'Professional Documentation',
  splitImageAlt1: 'Agent at Factory',
  splitImageAlt: 'Client at Desk',
  badgeIcon2: undefined,
  langPill1: undefined,
  featureDescription3: undefined,
  text13: undefined,
  heroMainImageSrc:
    'https://images.pexels.com/photos/8939056/pexels-photo-8939056.jpeg?auto=compress&cs=tinysrgb&w=1500',
  text23: undefined,
  pointDesc3: undefined,
  featureDescription1: undefined,
  heroHeadline: undefined,
  text27: undefined,
  text21: undefined,
  stepDesc1: undefined,
  advantageImageSrc:
    'https://images.pexels.com/photos/4483559/pexels-photo-4483559.jpeg?auto=compress&cs=tinysrgb&w=1500',
}

RepresentationSection.propTypes = {
  text22: PropTypes.element,
  stepTitle1: PropTypes.element,
  splitImageSrc: PropTypes.string,
  btn: PropTypes.element,
  featureTitle: PropTypes.element,
  featureDescription2: PropTypes.element,
  stepDesc: PropTypes.element,
  featureTitle1: PropTypes.element,
  ctaSubheadline: PropTypes.element,
  text17: PropTypes.element,
  pointTitle: PropTypes.element,
  heroSubheadline: PropTypes.element,
  imageAlt1: PropTypes.string,
  summaryText: PropTypes.element,
  badgeText: PropTypes.element,
  overlayText: PropTypes.element,
  advantageHeadline: PropTypes.element,
  sideTitle: PropTypes.element,
  strategicHeroHeadline: PropTypes.element,
  pointTitle1: PropTypes.element,
  heroMainImageAlt: PropTypes.string,
  docFeatureDesc1: PropTypes.element,
  sideTitle1: PropTypes.element,
  advantageVideoSrc: PropTypes.string,
  pointDesc1: PropTypes.element,
  text16: PropTypes.element,
  docFeatureDesc3: PropTypes.element,
  featureDescription: PropTypes.element,
  pointTitle3: PropTypes.element,
  text3: PropTypes.element,
  badgeIcon: PropTypes.element,
  negotiationVideoSrc: PropTypes.string,
  text15: PropTypes.element,
  text19: PropTypes.element,
  stepTitle: PropTypes.element,
  docFeatureTitle3: PropTypes.element,
  text10: PropTypes.element,
  sideText1: PropTypes.element,
  advantageImageAlt: PropTypes.string,
  text9: PropTypes.element,
  text26: PropTypes.element,
  stepDesc2: PropTypes.element,
  text6: PropTypes.element,
  docFeatureDesc: PropTypes.element,
  pointDesc2: PropTypes.element,
  text5: PropTypes.element,
  featureTitle3: PropTypes.element,
  imageSrc: PropTypes.string,
  ctaHeadline: PropTypes.element,
  text14: PropTypes.element,
  trustLabel1: PropTypes.element,
  langPill2: PropTypes.element,
  text8: PropTypes.element,
  badgeIcon3: PropTypes.element,
  text11: PropTypes.element,
  sideText: PropTypes.element,
  docFeatureDesc2: PropTypes.element,
  pointTitle2: PropTypes.element,
  docFeatureTitle: PropTypes.element,
  langPill3: PropTypes.element,
  trustLabel: PropTypes.element,
  text20: PropTypes.element,
  visualImgAlt: PropTypes.string,
  text: PropTypes.element,
  text7: PropTypes.element,
  imageSrc1: PropTypes.string,
  docFeatureTitle2: PropTypes.element,
  strategicHeroBadge: PropTypes.element,
  text1: PropTypes.element,
  negotiationHeadline: PropTypes.element,
  docSubheadline: PropTypes.element,
  langPill: PropTypes.element,
  text2: PropTypes.element,
  text4: PropTypes.element,
  badgeIcon1: PropTypes.element,
  featureTitle2: PropTypes.element,
  pointDesc: PropTypes.element,
  visualImgSrc: PropTypes.string,
  strategicHeroSubheadline: PropTypes.element,
  advantageSubheadline: PropTypes.element,
  text25: PropTypes.element,
  text18: PropTypes.element,
  badgeText1: PropTypes.element,
  text24: PropTypes.element,
  negotiationSubheadline: PropTypes.element,
  stepTitle2: PropTypes.element,
  docHeadline: PropTypes.element,
  text12: PropTypes.element,
  splitImageSrc1: PropTypes.string,
  docFeatureTitle1: PropTypes.element,
  summaryFooter: PropTypes.element,
  imageAlt: PropTypes.string,
  splitImageAlt1: PropTypes.string,
  splitImageAlt: PropTypes.string,
  badgeIcon2: PropTypes.element,
  langPill1: PropTypes.element,
  featureDescription3: PropTypes.element,
  text13: PropTypes.element,
  heroMainImageSrc: PropTypes.string,
  text23: PropTypes.element,
  pointDesc3: PropTypes.element,
  featureDescription1: PropTypes.element,
  heroHeadline: PropTypes.element,
  text27: PropTypes.element,
  text21: PropTypes.element,
  stepDesc1: PropTypes.element,
  advantageImageSrc: PropTypes.string,
}

export default RepresentationSection
