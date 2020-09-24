import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import SocialMedia from './socialmedia'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
    },
  })
)

export default function Artist({
  name,
  title,
  bio,
  image,
  facebookUrl,
  instagramUrl,
}) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={12} md={3} item>
            {image}
          </Grid>
          <Grid xs item>
            <Typography gutterBottom variant="h4" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              {title}
            </Typography>
            {bio}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <SocialMedia facebook={facebookUrl} instagram={instagramUrl} />
      </CardActions>
    </Card>
  )
}
