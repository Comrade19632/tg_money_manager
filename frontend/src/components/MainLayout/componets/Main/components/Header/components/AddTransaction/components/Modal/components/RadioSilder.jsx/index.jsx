import React from 'react'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'

const RadioSlider = ({ radioChoices, currentRadioValue, setCurrentRadioValue }) => (
  <div>
    {radioChoices.map((radioChoice) => {
      const id = uniqueId(`${radioChoice}_`)
      return (
        <div key={id}>
          <input
            id={id}
            name={radioChoice}
            type="radio"
            value={radioChoice}
            onChange={(e) => setCurrentRadioValue(e.target.value)}
            checked={currentRadioValue === radioChoice}
          />
          <label htmlFor={id}>{radioChoice}</label>
        </div>
      )
    })}
  </div>
)

RadioSlider.propTypes = {
  radioChoices: PropTypes.arrayOf(PropTypes.string),
  currentRadioValue: PropTypes.string,
  setCurrentRadioValue: PropTypes.func,
}

export default RadioSlider