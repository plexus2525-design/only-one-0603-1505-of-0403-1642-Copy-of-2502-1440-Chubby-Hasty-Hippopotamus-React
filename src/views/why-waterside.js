import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import CtaModal from '../components/cta-modal'
import ContactCta from '../components/contact-cta'
import Footer from '../components/footer'
import './why-waterside.css'

const WhyWaterside = (props) => {
  return (
    <div className="why-waterside-container1">
      <Helmet>
        <title>
          Why-Waterside - only one 0603 1505 of 04.03 16:42 Copy of 25.02 14:40
          Chubby Hasty Hippopotamus
        </title>
        <meta
          property="og:title"
          content="Why-Waterside - only one 0603 1505 of 04.03 16:42 Copy of 25.02 14:40 Chubby Hasty Hippopotamus"
        />
        <link
          rel="canonical"
          href="https://copy-of-copy-of-0403-1642-copy-of-2502-1440-chubby-h-d8xxy3.teleporthq.site/why-waterside"
        />
        <meta
          property="og:url"
          content="https://copy-of-copy-of-0403-1642-copy-of-2502-1440-chubby-h-d8xxy3.teleporthq.site/why-waterside"
        />
      </Helmet>
      <Navigation
        button={
          <Fragment>
            <span className="why-waterside-text10">Button</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="why-waterside-text11">Button</span>
          </Fragment>
        }
      ></Navigation>
      <section className="hero-proposition">
        <div className="hero-proposition-bg">
          <img
            alt="Waterside Integrated Trade and Logistics"
            src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-proposition-img"
          />
          <div className="hero-proposition-overlay"></div>
        </div>
        <div className="hero-proposition-container">
          <div className="hero-proposition-content">
            <span className="hero-proposition-tagline">
              Your Integrated Trade &amp; Logistics Partner
            </span>
            <h1 className="hero-title">
              Beyond Logistics: Strategic Global Partnership
            </h1>
            <p className="hero-subtitle">
              Waterside House Corporation bridges the gap between your business
              goals and global market reality. We provide the strategic
              representation to open doors and the operational excellence to
              ensure everything flows seamlessly through them.
            </p>
            <div className="hero-proposition-pillars">
              <div className="hero-pillar-item">
                <span className="hero-pillar-text">Seamless</span>
              </div>
              <div className="hero-pillar-divider"></div>
              <div className="hero-pillar-item">
                <span className="hero-pillar-text">Transparent</span>
              </div>
              <div className="hero-pillar-divider"></div>
              <div className="hero-pillar-item">
                <span className="hero-pillar-text">Reliable</span>
              </div>
            </div>
            <div className="hero-proposition-actions">
              <button id="heroOpenModal" className="btn-primary btn-lg btn">
                Get Your Personalized Solution
              </button>
              <a href="#differentiators">
                <div className="btn-outline btn-lg btn">
                  <span>Explore Differentiators</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="differentiators" className="diff-pillars">
        <div className="diff-pillars-container">
          <div className="diff-header">
            <h2 className="section-title">The Waterside Advantage</h2>
            <p className="section-subtitle">
              We unite strategic trade advisory with flawless operational
              execution.
            </p>
          </div>
          <div className="diff-bento-grid">
            <div className="diff-card-wide diff-card">
              <div className="diff-card-icon">
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
              <h3 className="diff-card-title">
                Integrated Trade &amp; Logistics Partner
              </h3>
              <p className="section-content">
                One partner to both grow your global reach and ensure its
                reliability. We combine high-level trade advisory with
                operational logistics excellence, eliminating the friction
                between sourcing and delivery.
              </p>
              <div className="diff-benefit">
                <strong>Benefit:</strong>
                <span>
                  {' '}
                  Reduced administrative burden and a single point of
                  accountability.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="diff-card">
              <div className="diff-card-icon">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="diff-card-title">Proactive Guardianship</h3>
              <p className="section-content">
                We anticipate risks—both commercial and logistical—providing
                solutions that safeguard your transactions and cargo from origin
                to destination.
              </p>
            </div>
            <div className="diff-card">
              <div className="diff-card-icon">
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
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="diff-card-title">Operational Excellence</h3>
              <p className="section-content">
                Meticulous customs clearance and optimized routing powered by
                15+ years of regulatory and market expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="integrated-approach">
        <div className="integrated-container">
          <div className="integrated-header">
            <h2 className="section-title">The Unified Model</h2>
            <p className="section-subtitle">
              How our International Trade Desk integrates with Core Logistics to
              accelerate your growth.
            </p>
          </div>
          <div className="timeline-vertical">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Strategic Representation</h3>
                <p className="section-content">
                  Our International Trade Desk acts as your global business
                  extension, navigating new markets, vetting suppliers, and
                  negotiating deals as your dedicated advocate.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Single Point of Contact</h3>
                <p className="section-content">
                  No more juggling multiple vendors. Your Dedicated Trade
                  Specialist manages the entire narrative, from contract
                  finalization to final market handover.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  End-to-End Process Integration
                </h3>
                <p className="section-content">
                  We bridge the gap between commercial negotiation and physical
                  logistics, ensuring Incoterms, payment structures, and
                  compliance are perfectly aligned.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Optimized Client Outcomes</h3>
                <p className="section-content">
                  The result: significantly reduced risk, faster time-to-market,
                  and the freedom to focus on your core business goals while we
                  handle the global complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-snapshot">
        <div className="process-snapshot-container">
          <div className="process-header">
            <h2 className="section-title">Your End-to-End Journey</h2>
            <p className="section-subtitle">
              A seamless, transparent, and reliable flow from source to
              destination.
            </p>
          </div>
          <div className="steps-horizontal">
            <div className="step-item">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Sourcing &amp; Collection</h3>
                <p className="section-content">
                  Direct coordination with suppliers or assistance in finding
                  reliable partners via our Trade Desk.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-arrow">
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Smart Forwarding</h3>
                <p className="section-content">
                  Dynamic routing and multi-modal solutions with real-time
                  tracking across our global network.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-arrow">
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Customs Clearance</h3>
                <p className="section-content">
                  Full responsibility for documentation, duty optimization, and
                  proactive risk management.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-arrow">
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>04</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Market Handover</h3>
                <p className="section-content">
                  Cargo arrives processed, documented, and ready for your
                  customer or warehouse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-metrics">
        <div className="trust-metrics-container">
          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-value">15+</span>
              <span className="metric-label">Years of Expertise</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">24h</span>
              <span className="metric-label">Avg. Clearance Time</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">99.8%</span>
              <span className="metric-label">On-Time Delivery</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">45+</span>
              <span className="metric-label">Markets Served</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">120+</span>
              <span className="metric-label">Trade Specialists</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">24/5</span>
              <span className="metric-label">Regional Support</span>
            </div>
          </div>
        </div>
      </section>
      <CtaModal
        btn={
          <Fragment>
            <span className="why-waterside-text19">Submit My Brief</span>
          </Fragment>
        }
        formLabel={
          <Fragment>
            <span className="why-waterside-text20">Full Name</span>
          </Fragment>
        }
        formLabel1={
          <Fragment>
            <span className="why-waterside-text21">Work Email</span>
          </Fragment>
        }
        formLabel2={
          <Fragment>
            <span className="why-waterside-text22">Primary Interest</span>
          </Fragment>
        }
        formLabel3={
          <Fragment>
            <span className="why-waterside-text23">
              Project Brief (Optional)
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="why-waterside-text24">
              Request Your End-to-End Solution
            </span>
          </Fragment>
        }
        rootClassName="cta-modalroot-class-name"
        ctaModalFooter={
          <Fragment>
            <span className="why-waterside-text25">
              Your Proactive Guardianship starts here.
            </span>
          </Fragment>
        }
        sectionSubtitle={
          <Fragment>
            <span className="why-waterside-text26">
              Consult with a Dedicated Trade Specialist today.
            </span>
          </Fragment>
        }
      ></CtaModal>
      <div className="why-waterside-container2">
        <div className="why-waterside-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.diff-card, .cta-modal, .hero-proposition-img {
  transition: none !important;
  animation: none !important;
  transform: none !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="why-waterside-container4">
        <div className="why-waterside-container5">
          <Script
            html={`<script defer data-name="waterside-logic">
(function(){
  const modal = document.getElementById("ctaModal")
  const openBtns = [document.getElementById("heroOpenModal")]
  const closeBtn = document.getElementById("closeCtaModal")

  openBtns.forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        modal.showModal()
      })
    }
  })

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close()
    })
  }

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
      modal.close()
    }
  })

  // Basic Form Feedback
  const form = modal.querySelector("form")
  if (form) {
    form.addEventListener("submit", (e) => {
      // Allow default native submission
      // But we can show a temporary loading state on the button
      const submitBtn = form.querySelector('button[type="submit"]')
      if (submitBtn) {
        submitBtn.disabled = true
        submitBtn.textContent = "Processing Brief..."
      }
    })
  }

  // Simple scroll reveal for timeline markers
  const observerOptions = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "scale(1)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".timeline-marker").forEach((marker) => {
    marker.style.opacity = "0"
    marker.style.transform = "scale(0.5)"
    marker.style.transition = "all 0.5s ease-out"
    observer.observe(marker)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <ContactCta
        btn={
          <Fragment>
            <span className="why-waterside-text27">Request My Solution</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="why-waterside-text28">15+ Years Expertise</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="why-waterside-text29">
              Get Your Personalized Solution
            </span>
          </Fragment>
        }
        rootClassName="contact-ctaroot-class-name1"
        sectionContent={
          <Fragment>
            <span className="why-waterside-text30">
              Connect with our Dedicated Trade Specialists to request a tailored
              End-to-End Solution for your business.
            </span>
          </Fragment>
        }
      ></ContactCta>
      <Footer></Footer>
    </div>
  )
}

export default WhyWaterside
