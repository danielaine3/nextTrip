import React from 'react'
import  { FormControl, InputLabel, makeStyles, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(1),
    minWidth: 350,
  }
}))

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
  const classes = useStyles()

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={`${id}-label`}>{title}</InputLabel>
      <Select
        id={id}
        label={title}
        labelId={`${id}-label`}
        onChange={handleChange}
        value={selected}
      >
        {options.map(option => {
          return (
            <MenuItem
              key={option.route_id || option.direction_id || option.place_code}
              value={option.route_id || option.direction_id || option.place_code}
            >
              {option.route_label || option.direction_name || option.description}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
