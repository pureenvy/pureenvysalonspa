import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'

const useStyles = (mini) =>
  makeStyles((theme) =>
    createStyles({
      root: {
        marginBottom: !mini ? theme.spacing(4) : theme.spacing(3),
      },
      image: {
        textAlign: 'center',
        maxHeight: mini ? '300px' : '100vh',
        overflow: 'hidden',
        margin: theme.spacing(-3),
        marginTop: theme.spacing(-3),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(-5),
        },
        [theme.breakpoints.up('lg')]: {
          maxHeight: mini && '400px',
        },
        [theme.breakpoints.down('xs')]: {
          marginTop: theme.spacing(-5),
          maxHeight: '100vh',
        },
      },
      content: {
        fontSize: 'smaller',
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
          top: '28vh',
          left: '3vw',
          padding: '24px',
          background: 'rgb(0,0,0,0.75)',
          color: 'white',
          maxWidth: '40vw',
        },
        [theme.breakpoints.up('lg')]: {
          top: '30vh',
          maxWidth: '30vw',
        },
      },
      miniImage: {
        position: 'relative',
        bottom: 'calc(25vw)',
        [theme.breakpoints.down('xs')]: {
          bottom: 0,
        },
      },
    })
  )

const HeroBanner = ({ alt, fluid, mini, children }) => {
  const classes = useStyles(mini)()

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <Img alt={alt} fluid={fluid} className={mini && classes.miniImage} />
      </div>
      {children && <div className={classes.content}>{children}</div>}
    </div>
  )
}

export default HeroBanner
