import React from 'react'

import PropTypes from 'prop-types'

import './background-overlay.css'

const BackgroundOverlay = (props) => {
  return (
    <div
      id={props.backgroundOverlayId}
      className="background-overlay-thq-background-overlay-elm background-overlay"
    ></div>
  )
}

BackgroundOverlay.defaultProps = {
  backgroundOverlayId: '',
}

BackgroundOverlay.propTypes = {
  backgroundOverlayId: PropTypes.string,
}

export default BackgroundOverlay
