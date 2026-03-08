import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-cta.css'

const ContactCta = (props) => {
  return (
    <section
      id={props.contactCtaId}
      className={`contact-cta-thq-contact-cta-elm contact-cta ${props.rootClassName} `}
    >
      <div className="contact-cta-container">
        <div className="contact-cta-content">
          <h2 className="section-title">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="contact-cta-text4">
                  Get Your Personalized Solution
                </span>
              </Fragment>
            )}
          </h2>
          <p className="section-content">
            {props.sectionContent ?? (
              <Fragment>
                <span className="contact-cta-text5">
                  Connect with our Dedicated Trade Specialists to request a
                  tailored End-to-End Solution for your business.
                </span>
              </Fragment>
            )}
          </p>
          <div className="contact-cta-trust">
            <div className="contact-cta-badge">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="contact-cta-text6">
                      15+ Years Expertise
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="contact-cta-form-wrapper">
          <form
            action="https://formsubmit.co/mail.watersidehousecorporation@gmail.com"
            method="POST"
            data-form-id="14c807f7-0953-4182-a9ad-36cf33af5738"
            className="contact-cta-form"
          >
            <div className="contact-cta-form-group">
              <input
                type="text"
                id="thq_true_hf9d"
                name="true"
                required="true"
                placeholder={props.contactCtaInputPlaceholder}
                data-form-field-id="thq_true_hf9d"
                className="contact-cta-input"
              />
            </div>
            <div className="contact-cta-form-group">
              <input
                type="email"
                id="thq_email_9eXJ"
                name="email"
                required="true"
                placeholder={props.contactCtaInputPlaceholder1}
                data-form-field-id="thq_email_9eXJ"
                className="contact-cta-input"
              />
            </div>
            <div className="contact-cta-form-group">
              <textarea
                id="thq_message_IMQ5"
                name="message"
                required="true"
                placeholder={props.contactCtaTextareaPlaceholder}
                data-form-field-id="thq_message_IMQ5"
                className="contact-cta-textarea"
              ></textarea>
            </div>
            <button
              id="thq_button_IFgP"
              name="button"
              type="submit"
              data-form-field-id="thq_button_IFgP"
              className="btn-primary btn-lg btn"
            >
              <span>
                {props.btn ?? (
                  <Fragment>
                    <span className="contact-cta-text3">
                      Request My Solution
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

ContactCta.defaultProps = {
  contactCtaTextareaPlaceholder: 'How can we help simplify your trade?',
  contactCtaInputPlaceholder: 'Full Name',
  contactCtaId: '',
  btn: undefined,
  sectionTitle: undefined,
  contactCtaInputPlaceholder1: 'Business Email',
  sectionContent: undefined,
  rootClassName: '',
  text: undefined,
}

ContactCta.propTypes = {
  contactCtaTextareaPlaceholder: PropTypes.string,
  contactCtaInputPlaceholder: PropTypes.string,
  contactCtaId: PropTypes.string,
  btn: PropTypes.element,
  sectionTitle: PropTypes.element,
  contactCtaInputPlaceholder1: PropTypes.string,
  sectionContent: PropTypes.element,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default ContactCta
