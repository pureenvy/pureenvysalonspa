import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
        textAlign: 'center', 
        maxHeight: '100vh', 
        overflow: 'hidden',
        margin: theme.spacing(-3),
        marginTop: theme.spacing(-11)
    },
    content: {
        position: 'absolute',
        top: '25vh',
        left: '10vw',
        padding: '24px',
        background: 'rgb(0,0,0,0.75)',
        color: 'white',
        maxWidth: '40vw'
    },
  })
)

const HeroBanner = ({Image, Content}) => {
  const classes = useStyles()

  return (
   <>
    <div className={classes.image}>{Image}</div>
      <div className={classes.content}>{Content}</div>
    </>
  )
}

export default HeroBanner
