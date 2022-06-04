/* eslint-disable react/forbid-prop-types */
import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const DateSelect = ({ className, dates, setDates, datesOptions }) => (
  <div className={className}>
    <Select
      defaultValue={dates}
      onChange={setDates}
      options={datesOptions}
      styles={{
        option: (styles) => ({
          ...styles,
          backgroundColor: null,
          '&:hover': {
            backgroundColor: '#6FA3D3',
          },
        }),
      }}
    />
  </div>
)

DateSelect.propTypes = {
  className: PropTypes.string,
  dates: PropTypes.object.isRequired,
  datesOptions: PropTypes.array.isRequired,
  setDates: PropTypes.func.isRequired
}

export default DateSelect