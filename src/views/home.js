import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import LogisticsServicesSection from '../components/logistics-services-section'
import CorridorsHighlight from '../components/corridors-highlight'
import ContactCta from '../components/contact-cta'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>
          only one 0603 1505 of 04.03 16:42 Copy of 25.02 14:40 Chubby Hasty
          Hippopotamus
        </title>
        <meta
          property="og:title"
          content="only one 0603 1505 of 04.03 16:42 Copy of 25.02 14:40 Chubby Hasty Hippopotamus"
        />
        <link
          rel="canonical"
          href="https://copy-of-copy-of-0403-1642-copy-of-2502-1440-chubby-h-d8xxy3.teleporthq.site/"
        />
        <meta
          property="og:url"
          content="https://copy-of-copy-of-0403-1642-copy-of-2502-1440-chubby-h-d8xxy3.teleporthq.site/"
        />
      </Helmet>
      <Navigation
        button={
          <Fragment>
            <span className="home-text10">Button</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="home-text11">Button</span>
          </Fragment>
        }
      ></Navigation>
      <section className="home-hero-proposition">
        <div className="hero-proposition-media">
          <video
            src="https://videos.pexels.com/video-files/8344448/8344448-hd_1280_720_60fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-proposition-video"
          ></video>
          <div className="home-hero-proposition-overlay"></div>
        </div>
        <div className="home-hero-proposition-container">
          <div className="home-hero-proposition-content">
            <h1 className="hero-title">End-to-End Global Trade Solutions</h1>
            <p className="hero-subtitle">
              Waterside House Corporation delivers seamless customs clearance,
              freight forwarding, and trade consulting. Leverage our 15+ years
              of expertise to simplify your supply chain from source to
              destination.
            </p>
            <div className="home-hero-proposition-actions">
              <a href="#LogisticsServicesSection">
                <div className="home-thq-btn-elm1 btn-primary btn-lg btn">
                  <span>Core Logistics &amp; Trade Services</span>
                </div>
              </a>
              <a href="#CorridorsHighlight">
                <div className="home-thq-btn-elm2 btn-outline btn-lg btn">
                  <span>Global Trade Corridors</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <LogisticsServicesSection
        serviceTitle={
          <Fragment>
            <span className="home-text14">
              Customs Clearance &amp; Compliance
            </span>
          </Fragment>
        }
        serviceTitle1={
          <Fragment>
            <span className="home-text15">
              Freight Forwarding &amp; Delivery
            </span>
          </Fragment>
        }
        serviceTitle2={
          <Fragment>
            <span className="home-text16">
              End-to-End Supply Chain Management
            </span>
          </Fragment>
        }
        serviceTitle3={
          <Fragment>
            <span className="home-text17">
              Trade Advisory &amp; Representation
            </span>
          </Fragment>
        }
        serviceTitle4={
          <Fragment>
            <span className="home-text18">
              Market Entry &amp; Partner Sourcing
            </span>
          </Fragment>
        }
        serviceTitle5={
          <Fragment>
            <span className="home-text19">15+ Years of Industry Expertise</span>
          </Fragment>
        }
        serviceDescription={
          <Fragment>
            <span className="home-text20">
              Expert handling of all documentation and regulatory requirements
              for rapid cargo release.
            </span>
          </Fragment>
        }
        serviceDescription1={
          <Fragment>
            <span className="home-text21">
              Seamless multi-modal transportation strategies across land, sea,
              and air corridors worldwide.
            </span>
          </Fragment>
        }
        serviceDescription2={
          <Fragment>
            <span className="home-text22">
              Integrated solutions from the supplier&apos;s facility to your
              final destination, ensuring full control and visibility.
            </span>
          </Fragment>
        }
        serviceDescription3={
          <Fragment>
            <span className="home-text23">
              Expert support in negotiations, contract structuring, and
              representing your interests in international transactions.
            </span>
          </Fragment>
        }
        serviceDescription4={
          <Fragment>
            <span className="home-text24">
              Leverage our network and expertise to find reliable suppliers or
              buyers and facilitate successful market entry.
            </span>
          </Fragment>
        }
        serviceDescription5={
          <Fragment>
            <span className="home-text25">
              Our specialists possess deep regulatory and market knowledge
              across diverse product categories and regions.
            </span>
          </Fragment>
        }
        logisticsServicesSectionId="LogisticsServicesSection"
      ></LogisticsServicesSection>
      <div className="home-container2">
        <CorridorsHighlight
          text={
            <Fragment>
              <span className="home-text26">Global Reach &amp; Corridors</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="home-text27">Global Trade Corridors</span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="home-text28">
                Optimized logistics and customs expertise in the world&apos;s
                key economic regions. We bridge the gap between your goals and
                global market reality.
              </span>
            </Fragment>
          }
          sectionContent1={
            <Fragment>
              <span className="home-text29">
                Direct access and streamlined logistics from major manufacturing
                hubs to global markets.
              </span>
            </Fragment>
          }
          sectionContent2={
            <Fragment>
              <span className="home-text30">
                In-depth knowledge of local customs regulations and established
                land transport networks.
              </span>
            </Fragment>
          }
          sectionContent3={
            <Fragment>
              <span className="home-text31">
                Connecting producers of agricultural goods, raw materials, and
                specialty products to international buyers.
              </span>
            </Fragment>
          }
          corridorsHighlightId="CorridorsHighlight"
          corridorsHighlightName={
            <Fragment>
              <span className="home-text32">Primary: China &amp; Asia</span>
            </Fragment>
          }
          corridorsHighlightName1={
            <Fragment>
              <span className="home-text33">
                Strategic: CIS &amp; Eastern Europe
              </span>
            </Fragment>
          }
          corridorsHighlightName2={
            <Fragment>
              <span className="home-text34">Growing Focus: South America</span>
            </Fragment>
          }
        ></CorridorsHighlight>
        <section className="why-waterside">
          <div className="why-waterside-container">
            <div className="why-waterside-header">
              <h2 className="section-title">
                The Waterside House Corporation Difference: Your Integrated
                Trade &amp; Logistics Partner
              </h2>
              <p className="section-subtitle">
                We unite strategic trade advisory with flawless operational
                execution. One partner to both grow your global reach and ensure
                its reliability.
              </p>
            </div>
            <div className="why-waterside-grid">
              <div className="why-waterside-card">
                <div className="why-waterside-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="why-waterside-title">
                  Strategic Representation &amp; Sourcing
                </h3>
                <p className="section-content">
                  We act as your advocate abroad: finding reliable partners,
                  negotiating deals, and representing your commercial interests
                  to unlock new markets.
                </p>
              </div>
              <div className="why-waterside-card">
                <div className="why-waterside-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M19 8v6m3-3h-6"></path>
                  </svg>
                </div>
                <h3 className="why-waterside-title">
                  Operational Excellence &amp; Precision
                </h3>
                <p className="section-content">
                  Your supply chain is powered by flawless execution: meticulous
                  customs clearance, optimized routing, and guaranteed
                  compliance at every step.
                </p>
              </div>
              <div className="why-waterside-card">
                <div className="why-waterside-icon">
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
                <h3 className="why-waterside-title">
                  Proactive Guardianship, End-to-End
                </h3>
                <p className="section-content">
                  We anticipate risks—both commercial and logistical—providing
                  solutions that safeguard your transactions, timeline, and
                  cargo from origin to destination.
                </p>
              </div>
              <div className="why-waterside-card">
                <div className="why-waterside-icon">
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
                      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                      <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m17 9v6m-3-3h6"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="why-waterside-title">
                  A Unified, Dedicated Partnership
                </h3>
                <p className="section-content">
                  You gain a cohesive team of trade experts and logistics
                  specialists, serving as a seamless, empowered extension of
                  your own company.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactCta
        btn={
          <Fragment>
            <span className="home-text35">Request My Solution</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="home-text36">15+ Years Expertise</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="home-text37">Get Your Personalized Solution</span>
          </Fragment>
        }
        sectionContent={
          <Fragment>
            <span className="home-text38">
              Connect with our Dedicated Trade Specialists to request a tailored
              End-to-End Solution for your business.
            </span>
          </Fragment>
        }
      ></ContactCta>
      <div className="home-container3">
        <div className="home-container4">
          <Script
            html={`<style>
        @keyframes slideUpFade {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container5">
        <div className="home-container6">
          <Script
            html={`<script defer data-name="waterside-animations">
(function(){
  // Simple scroll reveal observer
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

  // Apply to sections and cards for staggered feel
  document.querySelectorAll(".services-snapshot-card, .process-snapshot-step, .why-waterside-card, .corridors-highlight-item").forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = \`all 0.6s ease-out \${(index % 4) * 0.15}s\`
    revealObserver.observe(el)
  })

  // Form handling (UX enhancement)
  const contactForm = document.querySelector(".contact-cta-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      // Visual feedback only - native submission still occurs if action/method were real
      submitBtn.disabled = true
      submitBtn.textContent = "Processing..."

      setTimeout(() => {
        submitBtn.textContent = "Request Received"
        submitBtn.style.backgroundColor = "#2ecc71"
        contactForm.reset()

        setTimeout(() => {
          submitBtn.disabled = false
          submitBtn.textContent = originalText
          submitBtn.style.backgroundColor = ""
        }, 3000)
      }, 1000)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
