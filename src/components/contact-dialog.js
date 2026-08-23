import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-dialog.css'

const ContactDialog = (props) => {
  return (
    <dialog
      id={props.contactDialogId}
      className={`contact-dialog-thq-contact-dialog-elm contact-dialog ${props.rootClassName} `}
    >
      <div className="modal-header">
        <h2 className="section-title">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="contact-dialog-text16">
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
              <span className="contact-dialog-text19">
                Our specialists will review your requirements and provide a
                tailored trade and logistics strategy.
              </span>
            </Fragment>
          )}
        </p>
        <form
          action="https://formsubmit.co/mail.watersidehousecorporation@gmail.com"
          method="POST"
          data-form-id="1a0b9c1c-9070-4bb5-87c2-5fa6529fdc0f"
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">
              {props.text ?? (
                <Fragment>
                  <span className="contact-dialog-text15">Full Name</span>
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
                  <span className="contact-dialog-text17">Work Email</span>
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
                  <span className="contact-dialog-text18">
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
                  <span className="contact-dialog-text20">
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
                  <span className="contact-dialog-text21">
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

ContactDialog.defaultProps = {
  text: undefined,
  sectionTitle: undefined,
  text1: undefined,
  contactDialogId: '',
  textinputPlaceholder: 'John Doe',
  text2: undefined,
  sectionContent: undefined,
  textareaPlaceholder:
    'Tell us about your trade corridor or logistics challenge...',
  text3: undefined,
  rootClassName: '',
  textinputPlaceholder1: 'john@company.com',
  btn: undefined,
}

ContactDialog.propTypes = {
  text: PropTypes.element,
  sectionTitle: PropTypes.element,
  text1: PropTypes.element,
  contactDialogId: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text2: PropTypes.element,
  sectionContent: PropTypes.element,
  textareaPlaceholder: PropTypes.string,
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  btn: PropTypes.element,
}

export default ContactDialog
