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
        <option key={'key1'} value={'value1'}>Route1</option>
        <option key={'key2'} value={'value2'}>Route2</option>
        <option key={'key3'} value={'value3'}>Route3</option>
      </select>
    </>
  )
}
