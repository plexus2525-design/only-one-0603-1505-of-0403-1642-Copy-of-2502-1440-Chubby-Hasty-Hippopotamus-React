import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta-modal.css'

const CtaModal = (props) => {
  return (
    <dialog
      id="ctaModal"
      className={`cta-modal-thq-cta-modal-elm cta-modal ${props.rootClassName} `}
    >
      <div className="cta-modal-container">
        <div className="cta-modal-header">
          <h2 className="section-title">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="cta-modal-text2">
                  Request Your End-to-End Solution
                </span>
              </Fragment>
            )}
          </h2>
          <p className="section-subtitle">
            {props.sectionSubtitle ?? (
              <Fragment>
                <span className="cta-modal-text9">
                  Consult with a Dedicated Trade Specialist today.
                </span>
              </Fragment>
            )}
          </p>
          <button
            id="closeCtaModal"
            aria-label="Close modal"
            className="cta-modal-close"
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <form
          action="https://formsubmit.co/mail.watersidehousecorporation@gmail.com"
          method="POST"
          data-form-id="1f88e704-8ab9-4179-b7ff-d408a527ef1f"
          className="cta-form"
        >
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              {props.formLabel ?? (
                <Fragment>
                  <span className="cta-modal-text7">Full Name</span>
                </Fragment>
              )}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required="true"
              placeholder={props.formInputPlaceholder}
              data-form-field-id="fullName"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress" className="form-label">
              {props.formLabel1 ?? (
                <Fragment>
                  <span className="cta-modal-text5">Work Email</span>
                </Fragment>
              )}
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              required="true"
              placeholder={props.formInputPlaceholder1}
              data-form-field-id="emailAddress"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="serviceType" className="form-label">
              {props.formLabel2 ?? (
                <Fragment>
                  <span className="cta-modal-text4">Primary Interest</span>
                </Fragment>
              )}
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required="true"
              data-form-field-id="serviceType"
              className="form-input"
            >
              <option value="true">Select a service...</option>
              <option value="logistics">Core Logistics &amp; Customs</option>
              <option value="trade">International Trade Desk</option>
              <option value="end-to-end">Full End-to-End Solution</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="brief" className="form-label">
              {props.formLabel3 ?? (
                <Fragment>
                  <span className="cta-modal-text3">
                    Project Brief (Optional)
                  </span>
                </Fragment>
              )}
            </label>
            <textarea
              id="brief"
              name="brief"
              rows="3"
              placeholder={props.formInputPlaceholder2}
              data-form-field-id="brief"
              className="form-input"
            ></textarea>
          </div>
          <button
            id="thq_button_Irce"
            name="button"
            type="submit"
            data-form-field-id="thq_button_Irce"
            className="btn-primary btn-lg btn btn-full"
          >
            <span>
              {props.btn ?? (
                <Fragment>
                  <span className="cta-modal-text6">Submit My Brief</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
        <p className="cta-modal-footer">
          {props.ctaModalFooter ?? (
            <Fragment>
              <span className="cta-modal-text8">
                Your Proactive Guardianship starts here.
              </span>
            </Fragment>
          )}
        </p>
      </div>
    </dialog>
  )
}

CtaModal.defaultProps = {
  sectionTitle: undefined,
  formInputPlaceholder1: 'john@company.com',
  formLabel3: undefined,
  formLabel2: undefined,
  rootClassName: '',
  formLabel1: undefined,
  btn: undefined,
  formInputPlaceholder: 'John Doe',
  formInputPlaceholder2: 'Tell us about your trade goals...',
  formLabel: undefined,
  ctaModalFooter: undefined,
  sectionSubtitle: undefined,
}

CtaModal.propTypes = {
  sectionTitle: PropTypes.element,
  formInputPlaceholder1: PropTypes.string,
  formLabel3: PropTypes.element,
  formLabel2: PropTypes.element,
  rootClassName: PropTypes.string,
  formLabel1: PropTypes.element,
  btn: PropTypes.element,
  formInputPlaceholder: PropTypes.string,
  formInputPlaceholder2: PropTypes.string,
  formLabel: PropTypes.element,
  ctaModalFooter: PropTypes.element,
  sectionSubtitle: PropTypes.element,
}

export default CtaModal
