import React from 'react'

import PropTypes from 'prop-types'

import './services-snapshot.css'

const ServicesSnapshot = (props) => {
  return (
    <section
      id={props.servicesSnapshotId}
      className="services-snapshot-thq-services-snapshot-elm services-snapshot"
    >
      <div className="services-snapshot-container">
        <div className="services-snapshot-thq-services-snapshot-grid-elm services-snapshot-grid"></div>
      </div>
    </section>
  )
}

ServicesSnapshot.defaultProps = {
  servicesSnapshotId: '',
}

ServicesSnapshot.propTypes = {
  servicesSnapshotId: PropTypes.string,
}

export default ServicesSnapshot
