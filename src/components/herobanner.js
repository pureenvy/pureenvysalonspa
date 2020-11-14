import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      textAlign: 'center',
      maxHeight: '100vh',
      overflow: 'hidden',
      margin: theme.spacing(-3),
      marginTop: theme.spacing(-11),
    },
    content: {
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: '10vh',
        left: '10vw',
        padding: '24px',
        background: 'rgb(0,0,0,0.75)',
        color: 'white',
        maxWidth: '40vw',
      },
      [theme.breakpoints.up('lg')]: {
        top: '25vh',
        maxWidth: '30vw',
      },
    },
  })
)

const HeroBanner = ({ Image, Content }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.image}>{Image}</div>
      <div className={classes.content}>{Content}</div>
    </>
  )
}

export default HeroBanner
