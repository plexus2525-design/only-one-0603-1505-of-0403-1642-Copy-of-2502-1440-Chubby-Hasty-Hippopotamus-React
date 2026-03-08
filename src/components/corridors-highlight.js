import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import WHCAdvantageEndToEnd from './whc-advantage-end-to-end'
import './corridors-highlight.css'

const CorridorsHighlight = (props) => {
  return (
    <section
      id={props.corridorsHighlightId}
      className="corridors-highlight-thq-corridors-highlight-elm corridors-highlight"
    >
      <div className="corridors-highlight-container">
        <div className="corridors-highlight-featured">
          <div className="corridors-highlight-text">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="corridors-highlight-text30">
                    Global Trade Corridors
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="corridors-highlight-text33">
                    Optimized logistics and customs expertise in the
                    world&apos;s key economic regions. We bridge the gap between
                    your goals and global market reality.
                  </span>
                </Fragment>
              )}
            </p>
            <Link to="/strategic-corridors">
              <div className="corridors-highlight-thq-btn-elm btn-primary btn">
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="corridors-highlight-text29">
                        Global Reach &amp; Corridors
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div className="corridors-highlight-media">
            <img
              alt={props.corridorsHighlightImgAlt}
              src={props.corridorsHighlightImgSrc}
              className="corridors-highlight-img"
            />
          </div>
        </div>
        <div className="corridors-highlight-grid">
          <div className="corridors-highlight-item">
            <h3 className="corridors-highlight-name">
              {props.corridorsHighlightName ?? (
                <Fragment>
                  <span className="corridors-highlight-text32">
                    China &amp; Asia
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent1 ?? (
                <Fragment>
                  <span className="corridors-highlight-text28">
                    Direct access and streamlined logistics from manufacturing
                    hubs.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="corridors-highlight-item">
            <h3 className="corridors-highlight-name">
              {props.corridorsHighlightName1 ?? (
                <Fragment>
                  <span className="corridors-highlight-text26">
                    CIS &amp; Eastern Europe
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent2 ?? (
                <Fragment>
                  <span className="corridors-highlight-text27">
                    In-depth knowledge of local customs and land transport
                    networks.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="corridors-highlight-item">
            <h3 className="corridors-highlight-name">
              {props.corridorsHighlightName2 ?? (
                <Fragment>
                  <span className="corridors-highlight-text25">
                    South America
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent3 ?? (
                <Fragment>
                  <span className="corridors-highlight-text31">
                    Connecting producers of agricultural and specialty products.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <WHCAdvantageEndToEnd
        text1={
          <Fragment>
            <span className="corridors-highlight-text11">1</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="corridors-highlight-text12">2</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="corridors-highlight-text13">3</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="corridors-highlight-text14">4</span>
          </Fragment>
        }
        sectionTitle1={
          <Fragment>
            <span className="corridors-highlight-text15">
              The Waterside House Corporation Advantage: Your End-to-End Process
            </span>
          </Fragment>
        }
        sectionContent4={
          <Fragment>
            <span className="corridors-highlight-text16">
              Direct coordination with suppliers to ensure a smooth start.
            </span>
          </Fragment>
        }
        sectionContent5={
          <Fragment>
            <span className="corridors-highlight-text17">
              Dynamic routing and real-time tracking via our global network.
            </span>
          </Fragment>
        }
        sectionContent6={
          <Fragment>
            <span className="corridors-highlight-text18">
              Full responsibility for documentation and regulatory compliance.
            </span>
          </Fragment>
        }
        sectionContent7={
          <Fragment>
            <span className="corridors-highlight-text19">
              Goods arrive processed, documented, and ready for market.
            </span>
          </Fragment>
        }
        sectionSubtitle={
          <Fragment>
            <span className="corridors-highlight-text20">
              Seamless. Transparent. Reliable. A single point of contact for
              your entire supply chain journey.
            </span>
          </Fragment>
        }
        processSnapshotLabel={
          <Fragment>
            <span className="corridors-highlight-text21">
              Sourcing &amp; Collection
            </span>
          </Fragment>
        }
        processSnapshotLabel1={
          <Fragment>
            <span className="corridors-highlight-text22">Smart Forwarding</span>
          </Fragment>
        }
        processSnapshotLabel2={
          <Fragment>
            <span className="corridors-highlight-text23">
              Customs Clearance
            </span>
          </Fragment>
        }
        processSnapshotLabel3={
          <Fragment>
            <span className="corridors-highlight-text24">Final Delivery</span>
          </Fragment>
        }
      ></WHCAdvantageEndToEnd>
    </section>
  )
}

CorridorsHighlight.defaultProps = {
  corridorsHighlightName2: undefined,
  corridorsHighlightId: '',
  corridorsHighlightName1: undefined,
  sectionContent2: undefined,
  sectionContent1: undefined,
  corridorsHighlightImgSrc:
    'https://images.pexels.com/photos/14020705/pexels-photo-14020705.jpeg?auto=compress&cs=tinysrgb&w=1500',
  corridorsHighlightImgAlt: 'Global Trade Corridors',
  text: undefined,
  sectionTitle: undefined,
  sectionContent3: undefined,
  corridorsHighlightName: undefined,
  sectionContent: undefined,
}

CorridorsHighlight.propTypes = {
  corridorsHighlightName2: PropTypes.element,
  corridorsHighlightId: PropTypes.string,
  corridorsHighlightName1: PropTypes.element,
  sectionContent2: PropTypes.element,
  sectionContent1: PropTypes.element,
  corridorsHighlightImgSrc: PropTypes.string,
  corridorsHighlightImgAlt: PropTypes.string,
  text: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionContent3: PropTypes.element,
  corridorsHighlightName: PropTypes.element,
  sectionContent: PropTypes.element,
}

export default CorridorsHighlight
