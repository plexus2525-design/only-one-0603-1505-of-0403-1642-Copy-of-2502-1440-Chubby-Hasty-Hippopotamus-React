import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logistics-services-title.css'

const LogisticsServicesTitle = (props) => {
  return (
    <div
      id={props.logisticsServicesTitleId}
      className="logistics-services-title-container"
    >
      <h2 className="logistics-services-title">
        {props.logisticsServicesTitle ?? (
          <Fragment>
            <span className="logistics-services-title-text">
              Core Logistics &amp; Trade Services
            </span>
          </Fragment>
        )}
      </h2>
    </div>
  )
}

LogisticsServicesTitle.defaultProps = {
  logisticsServicesTitleId: '',
  logisticsServicesTitle: undefined,
}

LogisticsServicesTitle.propTypes = {
  logisticsServicesTitleId: PropTypes.string,
  logisticsServicesTitle: PropTypes.element,
}

export default LogisticsServicesTitle
