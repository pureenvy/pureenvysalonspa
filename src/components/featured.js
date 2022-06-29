import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import BrushIcon from '@material-ui/icons/Brush'
import EventIcon from '@material-ui/icons/Event'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6),
    },
    card: {
      height: '100%',
      textAlign: 'center',
    },
    button: {
      width: '100%',
      fontSize: '2em',
      textAlign: 'center',
      padding: theme.spacing(3),
    },
    icon: {
      fontSize: '3em',
    },
  })
)

const featuredItems = (classes) => [
  {
    href: '/appointments',
    text: 'Schedule an Appointment',
    icon: <ScheduleIcon className={classes.icon} />,
    target: '_blank',
  },
  {
    href: '/https://www.thegiftcardcafe.com/cart/index.php?storeID=21297',
    text: 'Purchase Gift Card',
    icon: <CardGiftcardIcon className={classes.icon} />,
  },
  {
    href: '/team',
    text: 'Meet the Team',
    icon: <BrushIcon className={classes.icon} />,
  },
  {
    href: '/location',
    text: 'Hours & Location',
    icon: <EventIcon className={classes.icon} />,
  },
]

const Featured = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={4} className={classes.root}>
      {featuredItems(classes).map(({ href, text, icon, target }) => (
        <Grid item xs sm={6}>
          <Button
            className={classes.button}
            component="a"
            href={href}
            target={target}
            variant="outlined"
          >
            <Grid>
              <Grid item>{icon}</Grid>
              <Grid item>{text}</Grid>
            </Grid>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default Featured
