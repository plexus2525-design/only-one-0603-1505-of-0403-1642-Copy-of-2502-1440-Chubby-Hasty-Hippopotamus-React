import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features8.css'

const Features8 = (props) => {
  return (
    <div className="features8-thq-layout226-elm thq-section-padding">
      <div className="features8-thq-max-width-elm thq-grid-auto-300 thq-section-max-width">
        <div className="thq-flex-column">
          <span className="thq-body-small">
            {props.feature1Slogan ?? (
              <Fragment>
                <span className="features8-text13">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column features8-thq-content-elm1">
            <h3 className="features8-thq-title1-elm1 thq-heading-3">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features8-text10">
                    Discover the Magic of Lorem Ipsum Text Generation
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="features8-thq-description1-elm1 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features8-text12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-thq-actions-elm1 thq-flex-row">
            <button className="features8-thq-button-elm1 thq-button-filled">
              <span className="features8-thq-action1-elm1 thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features8-text14">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features8-thq-button-elm2 thq-button-outline">
              <span className="features8-thq-action2-elm1 thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features8-text20">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="thq-flex-column">
          <span className="thq-body-small">
            {props.feature2Slogan ?? (
              <Fragment>
                <span className="features8-text18">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column features8-thq-content-elm2">
            <h3 className="features8-thq-title1-elm2 thq-heading-3">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features8-text17">
                    Discover the Magic of Lorem Ipsum Text Generation
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="features8-thq-description1-elm2 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features8-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-thq-actions-elm2 thq-flex-row">
            <button className="features8-thq-button-elm3 thq-button-filled">
              <span className="features8-thq-action1-elm2 thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features8-text14">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features8-thq-button-elm4 thq-button-outline">
              <span className="features8-thq-action2-elm2 thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features8-text20">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="thq-flex-column">
          <span className="thq-body-small">
            {props.feature3Slogan ?? (
              <Fragment>
                <span className="features8-text15">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column features8-thq-content-elm3">
            <h3 className="features8-thq-title1-elm3 thq-heading-3">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features8-text11">
                    Discover the Magic of Lorem Ipsum Text Generation
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="features8-thq-description1-elm3 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features8-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-thq-actions-elm3 thq-flex-row">
            <button className="features8-thq-button-elm5 thq-button-filled">
              <span className="features8-thq-action1-elm3 thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features8-text14">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features8-thq-button-elm6 thq-button-outline">
              <span className="features8-thq-action2-elm3 thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features8-text20">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features8.defaultProps = {
  feature1Title: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature1Slogan: undefined,
  mainAction: undefined,
  feature3Slogan: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature2Slogan: undefined,
  feature3Description: undefined,
  secondaryAction: undefined,
}

Features8.propTypes = {
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Slogan: PropTypes.element,
  mainAction: PropTypes.element,
  feature3Slogan: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Slogan: PropTypes.element,
  feature3Description: PropTypes.element,
  secondaryAction: PropTypes.element,
}

export default Features8
