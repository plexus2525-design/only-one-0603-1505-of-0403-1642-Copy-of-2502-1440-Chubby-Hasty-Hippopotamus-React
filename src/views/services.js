import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ContactCta from '../components/contact-cta'
import Footer from '../components/footer'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container1">
      <Helmet>
        <title>
          Services - only one 0603 1505 of 04.03 16:42 Copy of 25.02 14:40
          Chubby Hasty Hippopotamus
        </title>
        <meta
          property="og:title"
          content="Services - only one 0603 1505 of 04.03 16:42 Copy of 25.02 14:40 Chubby Hasty Hippopotamus"
        />
        <link
          rel="canonical"
          href="https://copy-of-copy-of-0403-1642-copy-of-2502-1440-chubby-h-d8xxy3.teleporthq.site/services"
        />
        <meta
          property="og:url"
          content="https://copy-of-copy-of-0403-1642-copy-of-2502-1440-chubby-h-d8xxy3.teleporthq.site/services"
        />
      </Helmet>
      <Navigation
        button={
          <Fragment>
            <span className="services-text10">Button</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="services-text11">Button</span>
          </Fragment>
        }
      ></Navigation>
      <section className="services-hero">
        <div className="services-hero-bg">
          <video
            src="https://videos.pexels.com/video-files/30524226/13076625_640_360_60fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="services-hero-video"
          ></video>
          <div className="services-hero-overlay"></div>
        </div>
        <div className="services-hero-container">
          <div className="services-hero-content">
            <h1 className="hero-title">
              Your Integrated Trade &amp; Logistics Partner
            </h1>
            <p className="hero-subtitle">
              Waterside House Corporation delivers seamless customs clearance,
              freight forwarding, and trade consulting. Leverage our 15+ years
              of expertise to simplify your supply chain from source to
              destination.
            </p>
            <div className="services-hero-cta-group">
              <button id="openHeroModal" className="btn-primary btn-lg btn">
                Get Your Personalized Solution
              </button>
              <div className="services-hero-badges">
                <div className="badge-item">
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
                  <span>Proactive Guardianship</span>
                </div>
                <div className="badge-item">
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
                  <span>Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="core-logistics">
        <div className="core-logistics-container">
          <div className="core-logistics-header">
            <h2 className="section-title">
              Core Logistics &amp; Trade Services
            </h2>
            <p className="section-subtitle">
              Specialized customs, forwarding, and advisory solutions for food
              products, chemicals, equipment, and consumer goods.
            </p>
          </div>
          <div className="core-logistics-grid">
            <div className="logistics-card">
              <div className="logistics-icon-wrapper">
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13"></line>
                  <line x1="16" x2="8" y1="17" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="section-content">
                Customs Clearance &amp; Compliance
              </h3>
              <p className="section-content">
                Expert handling of all documentation and regulatory requirements
                for rapid cargo release and duty optimization.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon-wrapper">
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
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polyline points="16 8 20 8 23 11 23 16 16 16 16 8"></polyline>
                  <circle r="2.5" cx="5.5" cy="18.5"></circle>
                  <circle r="2.5" cx="18.5" cy="18.5"></circle>
                </svg>
              </div>
              <h3 className="section-content">
                Freight Forwarding &amp; Delivery
              </h3>
              <p className="section-content">
                Seamless multi-modal transportation strategies across land, sea,
                and air corridors worldwide with real-time tracking.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon-wrapper">
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" x2="12" y1="22.08" y2="12"></line>
                </svg>
              </div>
              <h3 className="section-content">
                End-to-End Supply Chain Management
              </h3>
              <p className="section-content">
                Integrated solutions from the supplier&apos;s facility to your
                final destination, ensuring full control and visibility.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon-wrapper">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="8.5" cy="7"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <h3 className="section-content">
                Trade Advisory &amp; Representation
              </h3>
              <p className="section-content">
                Expert support in negotiations, contract structuring, and
                representing your interests in international transactions.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon-wrapper">
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
                  <circle r="8" cx="11" cy="11"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="section-content">
                Market Entry &amp; Partner Sourcing
              </h3>
              <p className="section-content">
                Leverage our network and expertise to find reliable suppliers or
                buyers and facilitate successful market entry.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon-wrapper">
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
              <h3 className="section-content">
                15+ Years of Industry Expertise
              </h3>
              <p className="section-content">
                Our specialists possess deep regulatory and market knowledge
                across diverse product categories and regions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="trade-desk">
        <div className="trade-desk-container">
          <div className="trade-desk-bento">
            <div className="trade-desk-main">
              <h2 className="section-title">
                International Trade Desk: Your Global Business Extension
              </h2>
              <p className="section-content">
                Beyond logistics. We act as your dedicated representative to
                navigate new markets, find partners, and secure deals. Focus on
                your core business. Let us handle the complexities of global
                trade.
              </p>
              <div className="trade-desk-features">
                <div className="feature-item">
                  <h4 className="section-content">
                    Strategic Representation &amp; Sourcing
                  </h4>
                  <p className="section-content">
                    We identify and vet reliable suppliers or buyers tailored to
                    your product and business goals, acting as your advocate
                    abroad.
                  </p>
                </div>
                <div className="feature-item">
                  <h4 className="section-content">
                    Commercial Negotiation Support
                  </h4>
                  <p className="section-content">
                    Our experts represent your interests in international
                    dealings, from initial contact to contract finalization.
                  </p>
                </div>
              </div>
              <a
                href="#ContactCta"
                className="services-thq-btn-elm2 btn-lg btn btn-accent"
              >
                Consult a Trade Specialist
              </a>
            </div>
            <div className="trade-desk-side">
              <div className="side-card">
                <h4 className="section-content">Business Communication</h4>
                <p className="section-content">
                  Professional translation, preparation of international
                  tenders, and commercial correspondence in English.
                </p>
              </div>
              <div className="elevated side-card">
                <h4 className="section-content">Trade Advisory</h4>
                <p className="section-content">
                  Guidance on Incoterms, payment structures, and risk management
                  for seamless global operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-map">
        <div className="process-map-container">
          <div className="process-header">
            <h2 className="services-thq-section-title-elm3 section-title">
              The Waterside House Corporation Advantage: Your End-to-End Process
            </h2>
            <p className="services-thq-section-subtitle-elm2 section-subtitle">
              Seamless. Transparent. Reliable. A single point of contact for
              your entire supply chain journey.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="services-step-number">
                <span>1</span>
              </div>
              <div className="step-content">
                <h3 className="section-content">
                  Sourcing &amp; Collection Support
                </h3>
                <p className="section-content">
                  We coordinate directly with your supplier or assist in finding
                  reliable partners, ensuring a smooth start.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="services-step-number">
                <span>2</span>
              </div>
              <div className="step-content">
                <h3 className="section-content">
                  Smart Forwarding &amp; Logistics
                </h3>
                <p className="section-content">
                  Dynamic routing, multi-modal solutions, and real-time tracking
                  via our managed global network.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="services-step-number">
                <span>3</span>
              </div>
              <div className="step-content">
                <h3 className="section-content">
                  Customs &amp; Regulatory Clearance
                </h3>
                <p className="section-content">
                  Full responsibility for documentation, duty optimization, and
                  compliance to ensure your goods are cleared for market.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="services-step-number">
                <span>4</span>
              </div>
              <div className="step-content">
                <h3 className="section-content">
                  Final Delivery &amp; Market Handover
                </h3>
                <p className="section-content">
                  Not just delivery — we ensure cargo arrives processed,
                  documented, and ready for your customer or warehouse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="compliance-guardianship">
        <div className="compliance-container">
          <div className="compliance-bento">
            <div className="compliance-main-cell">
              <h2 className="section-title">
                Compliance &amp; Proactive Guardianship
              </h2>
              <p className="section-content">
                We anticipate risks—both commercial and logistical—providing
                solutions that safeguard your transactions, timeline, and cargo
                from origin to destination. Our proactive risk management
                approach ensures that regulatory hurdles never become
                operational delays.
              </p>
              <div className="compliance-stats">
                <div className="stat-item">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Compliance Focus</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">Zero</span>
                  <span className="stat-label">Regulatory Delays</span>
                </div>
              </div>
            </div>
            <div className="compliance-side-cell">
              <div className="icon-box">
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
              <h4 className="section-content">Regulatory Advisory</h4>
              <p className="section-content">
                In-depth guidance on Incoterms 2020 and regional trade
                regulations.
              </p>
            </div>
            <div className="accent compliance-side-cell">
              <div className="icon-box">
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
              <h4 className="section-content">Cargo Integrity</h4>
              <p className="section-content">
                Meticulous oversight of cargo handling and insurance protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="industry-corridors">
        <div className="corridors-container">
          <div className="corridors-bento">
            <div className="corridors-main">
              <h2 className="section-title">
                Global Trade Corridors &amp; Sector Expertise
              </h2>
              <p className="section-content">
                Optimized logistics and customs expertise in the world&apos;s
                key economic regions. We provide specialized solutions for food
                products, chemicals, equipment, and consumer goods.
              </p>
              <div className="corridors-grid">
                <div className="corridor-item">
                  <h5 className="section-content">Primary: China &amp; Asia</h5>
                  <p className="section-content">
                    Direct access and streamlined logistics from major
                    manufacturing hubs.
                  </p>
                </div>
                <div className="corridor-item">
                  <h5 className="section-content">
                    Strategic: CIS &amp; Eastern Europe
                  </h5>
                  <p className="section-content">
                    In-depth knowledge of local customs and land transport
                    networks.
                  </p>
                </div>
                <div className="corridor-item">
                  <h5 className="section-content">
                    Growing Focus: South America
                  </h5>
                  <p className="section-content">
                    Connecting producers of agricultural goods and raw
                    materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="corridors-support">
              <div className="support-card">
                <h4 className="section-content">24/5 Regional Support</h4>
                <p className="section-content">
                  Dedicated teams in Asia and Europe ensuring real-time
                  oversight.
                </p>
              </div>
            </div>
            <div className="corridors-network">
              <div className="support-card dark">
                <h4 className="section-content">Worldwide Network</h4>
                <p className="section-content">
                  Adaptable solutions for any trade lane, supported by a global
                  partner ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-modal-trigger">
        <div className="cta-wrapper">
          <h2 className="section-title">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="section-content">
            Connect with your Dedicated Trade Specialist for a personalized
            assessment.
          </p>
          <a
            href="#ContactCta"
            id="openContactModal"
            className="services-thq-btn-elm3 btn-primary btn btn-xl"
          >
            Get Your Personalized Solution
          </a>
        </div>
      </section>
      <dialog
        id="contactModal"
        className="services-thq-contact-dialog-elm contact-dialog"
      >
        <div className="modal-header">
          <h2 className="section-title">Request Your Assessment</h2>
          <button
            id="closeContactModal"
            aria-label="Close modal"
            className="modal-close-btn"
          >
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
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <p className="section-content">
            Our specialists will review your requirements and provide a tailored
            trade and logistics strategy.
          </p>
          <form
            action="https://formsubmit.co/mail.watersidehousecorporation@gmail.com"
            method="POST"
            data-form-id="40cf70de-e6f9-4c8c-8a52-f3baca13778d"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="true"
                required="true"
                placeholder="John Doe"
                data-form-field-id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required="true"
                placeholder="john@company.com"
                data-form-field-id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Primary Interest</label>
              <select
                id="service"
                name="service"
                required="true"
                data-form-field-id="service"
              >
                <option value="true">Select a service...</option>
                <option value="logistics">Core Logistics &amp; Customs</option>
                <option value="trade">International Trade Desk</option>
                <option value="end-to-end">End-to-End Solutions</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Requirements</label>
              <textarea
                id="message"
                name="message"
                required="true"
                minlength="10"
                placeholder="Tell us about your trade corridor or logistics challenge..."
                data-form-field-id="message"
              ></textarea>
            </div>
            <button
              id="thq_button_5UAd"
              name="button"
              type="submit"
              data-form-field-id="thq_button_5UAd"
              className="btn-primary btn-lg btn btn-full"
            >
              <span>Schedule Consultation</span>
            </button>
          </form>
        </div>
      </dialog>
      <ContactCta
        btn={
          <Fragment>
            <span className="services-text23">Request My Solution</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="services-text24">15+ Years Expertise</span>
          </Fragment>
        }
        contactCtaId="ContactCta"
        sectionTitle={
          <Fragment>
            <span className="services-text25">
              Get Your Personalized Solution
            </span>
          </Fragment>
        }
        rootClassName="contact-ctaroot-class-name"
        sectionContent={
          <Fragment>
            <span className="services-text26">
              Connect with our Dedicated Trade Specialists to request a tailored
              End-to-End Solution for your business.
            </span>
          </Fragment>
        }
      ></ContactCta>
      <div className="services-container2">
        <div className="services-container3">
          <Script
            html={`<script defer data-name="services-interactions">
(function(){
  const contactModal = document.getElementById("contactModal")
  const openHeroBtn = document.getElementById("openHeroModal")
  const openCtaBtn = document.getElementById("openContactModal")
  const closeBtn = document.getElementById("closeContactModal")

  const openModal = () => {
    if (contactModal) contactModal.showModal()
  }

  const closeModal = () => {
    if (contactModal) contactModal.close()
  }

  if (openHeroBtn) openHeroBtn.addEventListener("click", openModal)
  if (openCtaBtn) openCtaBtn.addEventListener("click", openModal)
  if (closeBtn) closeBtn.addEventListener("click", closeModal)

  // Close modal on backdrop click
  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      const dialogDimensions = contactModal.getBoundingClientRect()
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        contactModal.close()
      }
    })
  }

  // Scroll animations observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".logistics-card, .process-step, .side-card, .compliance-side-cell").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    revealObserver.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Services
