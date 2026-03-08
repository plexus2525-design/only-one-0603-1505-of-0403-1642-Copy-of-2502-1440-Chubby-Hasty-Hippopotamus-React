import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import LogisticsServicesTitle from './logistics-services-title'
import './logistics-services-header.css'

const LogisticsServicesHeader = (props) => {
  return (
    <header className="logistics-services-header-thq-logistics-services-header-elm logistics-services-header">
      <div className="header-accent-line"></div>
      <LogisticsServicesTitle
        logisticsServicesTitle={
          <Fragment>
            <span className="logistics-services-header-text1">
              Core Logistics &amp; Trade Services
            </span>
          </Fragment>
        }
        logisticsServicesTitleId="LogisticsServicesTitle"
      ></LogisticsServicesTitle>
      <p className="logistics-services-subtitle">
        {props.logisticsServicesSubtitle ?? (
          <Fragment>
            <span className="logistics-services-header-text2">
              Specialized customs, forwarding, and advisory solutions for food
              products, chemicals, equipment, and consumer goods.
            </span>
          </Fragment>
        )}
      </p>
    </header>
  )
}

LogisticsServicesHeader.defaultProps = {
  logisticsServicesSubtitle: undefined,
}

LogisticsServicesHeader.propTypes = {
  logisticsServicesSubtitle: PropTypes.element,
}

export default LogisticsServicesHeader
