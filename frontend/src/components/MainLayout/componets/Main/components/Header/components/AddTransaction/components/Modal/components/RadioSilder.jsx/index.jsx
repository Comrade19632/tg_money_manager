import React from 'react'
import PropTypes from 'prop-types'

const RadioSlider = ({ radioChoices, currentRadioValue, setCurrentRadioValue }) => (
  <div>
    {radioChoices.map((radioChoice) => (
      <div key={radioChoice.id}>
        <input
          id={radioChoice.id}
          name={radioChoice.label}
          type="radio"
          value={radioChoice.label}
          onChange={(e) => setCurrentRadioValue(e.target.value)}
          checked={currentRadioValue === radioChoice.label}
        />
        <label htmlFor={radioChoice.id}>{radioChoice.label}</label>
      </div>
    ))}
  </div>
)

RadioSlider.propTypes = {
  radioChoices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  currentRadioValue: PropTypes.string,
  setCurrentRadioValue: PropTypes.func,
}

export default RadioSlider