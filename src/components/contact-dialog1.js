import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-dialog1.css'

const ContactDialog1 = (props) => {
  return (
    <dialog
      id={props.contactDialogId}
      className={`contact-dialog1-thq-thq-contact-dialog-elm-elm contact-dialog ${props.rootClassName} `}
    >
      <div className="modal-header">
        <h2 className="section-title">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="contact-dialog1-text20">
                Request Your Assessment
              </span>
            </Fragment>
          )}
        </h2>
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
          {props.sectionContent ?? (
            <Fragment>
              <span className="contact-dialog1-text21">
                Our specialists will review your requirements and provide a
                tailored trade and logistics strategy.
              </span>
            </Fragment>
          )}
        </p>
        <form
          action="https://formsubmit.co/mail.watersidehousecorporation@gmail.com"
          method="POST"
          data-form-id="67773179-7bd4-4d50-ba5d-8b511a08301f"
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">
              {props.text ?? (
                <Fragment>
                  <span className="contact-dialog1-text19">Full Name</span>
                </Fragment>
              )}
            </label>
            <input
              type="text"
              id="name"
              name="true"
              required="true"
              placeholder={props.textinputPlaceholder}
              data-form-field-id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {props.text1 ?? (
                <Fragment>
                  <span className="contact-dialog1-text15">Work Email</span>
                </Fragment>
              )}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required="true"
              placeholder={props.textinputPlaceholder1}
              data-form-field-id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">
              {props.text2 ?? (
                <Fragment>
                  <span className="contact-dialog1-text16">
                    Primary Interest
                  </span>
                </Fragment>
              )}
            </label>
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
            <label htmlFor="message">
              {props.text3 ?? (
                <Fragment>
                  <span className="contact-dialog1-text18">
                    Your Requirements
                  </span>
                </Fragment>
              )}
            </label>
            <textarea
              id="message"
              name="message"
              required="true"
              minlength="10"
              placeholder={props.textareaPlaceholder}
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
            <span>
              {props.btn ?? (
                <Fragment>
                  <span className="contact-dialog1-text17">
                    Schedule Consultation
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </dialog>
  )
}

ContactDialog1.defaultProps = {
  text1: undefined,
  contactDialogId: '',
  textinputPlaceholder1: 'john@company.com',
  text2: undefined,
  rootClassName: '',
  textinputPlaceholder: 'John Doe',
  btn: undefined,
  text3: undefined,
  text: undefined,
  textareaPlaceholder:
    'Tell us about your trade corridor or logistics challenge...',
  sectionTitle: undefined,
  sectionContent: undefined,
}

ContactDialog1.propTypes = {
  text1: PropTypes.element,
  contactDialogId: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text2: PropTypes.element,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  btn: PropTypes.element,
  text3: PropTypes.element,
  text: PropTypes.element,
  textareaPlaceholder: PropTypes.string,
  sectionTitle: PropTypes.element,
  sectionContent: PropTypes.element,
}

export default ContactDialog1
