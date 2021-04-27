import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    padding: 10,
  },
}))

export const Page = ({children, title}) => {
  const classes =  useStyles()
  return (
      <Container maxWidth='sm'>
        <Typography variant='h5' className={classes.title}>
          {title}
        </Typography>
        {children}
      </Container>
  )
}
