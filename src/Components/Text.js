import React from 'react'
import PropTypes from 'prop-types'
import './Text.css'

function Text(props) {
  return (
    <div className="text">
      <div className="subheading" style={{color: `${props.color}`}}>
        {props.subheading}
      </div>
      <div className="heading">{props.heading}</div>
      <div className="para-text">{props.para}</div>
    </div>
  )
}

export default Text
Text.propTypes = {
  color: PropTypes.string,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  para: PropTypes.string,
}
