import React from 'react'

export const Dropdown = ({
  id,
  options, 
  onSelect,
  selected,
  title,
}) => {
  const handleChange = (event) => {
    onSelect(event.target.value)
  }
  console.log('options', options)


  return (
    <>
      <label id={`${id}-label`}>{title}</label>
      <select
        id={id}
        onChange={handleChange}
        value={selected}
      >
        {options.map(option => {
          return (
            <option
              key={option.route_id}
              value={option.route_id}
            >
              {option.route_label}
            </option>
          )
        })}
      </select>
    </>
  )
}
