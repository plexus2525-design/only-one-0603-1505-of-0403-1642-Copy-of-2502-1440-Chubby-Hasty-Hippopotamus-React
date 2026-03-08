import React from 'react'

import PropTypes from 'prop-types'

import './background-image.css'

const BackgroundImage = (props) => {
  return (
    <div id={props.backgroundImageId} className="background-image-container">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="background-image"
      />
    </div>
  )
}

BackgroundImage.defaultProps = {
  backgroundImageAlt: 'Cargo shipping containers',
  backgroundImageId: '',
  backgroundImageSrc:
    'https://images.pexels.com/photos/32399138/pexels-photo-32399138.jpeg?auto=compress&cs=tinysrgb&w=1500',
}

BackgroundImage.propTypes = {
  backgroundImageAlt: PropTypes.string,
  backgroundImageId: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
}

export default BackgroundImage
