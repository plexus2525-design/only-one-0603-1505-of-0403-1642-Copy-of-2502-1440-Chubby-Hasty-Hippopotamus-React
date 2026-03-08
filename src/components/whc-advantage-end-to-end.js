import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './whc-advantage-end-to-end.css'

const WHCAdvantageEndToEnd = (props) => {
  return (
    <section className="whc-advantage-end-to-end-thq-process-snapshot-elm process-snapshot">
      <div className="home-process-snapshot-container">
        <div className="process-snapshot-header">
          <h2 className="section-title">
            {props.sectionTitle1 ?? (
              <Fragment>
                <span className="whc-advantage-end-to-end-text27">
                  The Waterside House Corporation Advantage: Your End-to-End
                  Process
                </span>
              </Fragment>
            )}
          </h2>
          <p className="section-subtitle">
            {props.sectionSubtitle ?? (
              <Fragment>
                <span className="whc-advantage-end-to-end-text24">
                  Seamless. Transparent. Reliable. A single point of contact for
                  your entire supply chain journey.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="process-snapshot-stepper">
          <div className="process-snapshot-step">
            <div className="process-snapshot-number">
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text17">1</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="process-snapshot-info">
              <h3 className="process-snapshot-label">
                {props.processSnapshotLabel ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text25">
                      Sourcing &amp; Collection
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent4 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text18">
                      Direct coordination with suppliers to ensure a smooth
                      start.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="process-snapshot-divider"></div>
          <div className="process-snapshot-step">
            <div className="process-snapshot-number">
              <span>
                {props.text2 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text20">2</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="process-snapshot-info">
              <h3 className="process-snapshot-label">
                {props.processSnapshotLabel1 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text15">
                      Smart Forwarding
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent5 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text26">
                      Dynamic routing and real-time tracking via our global
                      network.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="process-snapshot-divider"></div>
          <div className="process-snapshot-step">
            <div className="process-snapshot-number">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text14">3</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="process-snapshot-info">
              <h3 className="process-snapshot-label">
                {props.processSnapshotLabel2 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text23">
                      Customs Clearance
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent6 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text22">
                      Full responsibility for documentation and regulatory
                      compliance.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="process-snapshot-divider"></div>
          <div className="process-snapshot-step">
            <div className="process-snapshot-number">
              <span>
                {props.text4 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text21">4</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="process-snapshot-info">
              <h3 className="process-snapshot-label">
                {props.processSnapshotLabel3 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text19">
                      Final Delivery
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent7 ?? (
                  <Fragment>
                    <span className="whc-advantage-end-to-end-text16">
                      Goods arrive processed, documented, and ready for market.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WHCAdvantageEndToEnd.defaultProps = {
  text3: undefined,
  processSnapshotLabel1: undefined,
  sectionContent7: undefined,
  text1: undefined,
  sectionContent4: undefined,
  processSnapshotLabel3: undefined,
  text2: undefined,
  text4: undefined,
  sectionContent6: undefined,
  processSnapshotLabel2: undefined,
  sectionSubtitle: undefined,
  processSnapshotLabel: undefined,
  sectionContent5: undefined,
  sectionTitle1: undefined,
}

WHCAdvantageEndToEnd.propTypes = {
  text3: PropTypes.element,
  processSnapshotLabel1: PropTypes.element,
  sectionContent7: PropTypes.element,
  text1: PropTypes.element,
  sectionContent4: PropTypes.element,
  processSnapshotLabel3: PropTypes.element,
  text2: PropTypes.element,
  text4: PropTypes.element,
  sectionContent6: PropTypes.element,
  processSnapshotLabel2: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  processSnapshotLabel: PropTypes.element,
  sectionContent5: PropTypes.element,
  sectionTitle1: PropTypes.element,
}

export default WHCAdvantageEndToEnd
