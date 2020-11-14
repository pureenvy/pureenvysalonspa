import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import BrushIcon from '@material-ui/icons/Brush'
import EventIcon from '@material-ui/icons/Event'
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
    icon: {
      width: '100%',
      paddingTop: theme.spacing(2),
      fontSize: '10em',
    },
    button: {
      width: '100%',
    },
  })
)

const Featured = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs md={4}>
        <Card className={classes.card}>
          <CardMedia>
            <ScheduleIcon className={classes.icon} />
          </CardMedia>
          <CardActions>
            <Button className={classes.button} component="a" href="/location">
              Hours &amp; Location
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs md={4}>
        <Card className={classes.card}>
          <CardMedia>
            <BrushIcon className={classes.icon} />
          </CardMedia>
          <CardActions>
            <Button className={classes.button} component="a" href="/artists">
              Meet the Team
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs md={4}>
        <Card className={classes.card}>
          <CardMedia>
            <EventIcon className={classes.icon} />
          </CardMedia>
          <CardActions>
            <Button
              className={classes.button}
              component="a"
              href="http://envysalonblm.mysalononline.com/Booking/?sid=0"
              target="_blank"
            >
              Schedule an Appointment
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Featured
