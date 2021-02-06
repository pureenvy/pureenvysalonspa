import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
    },
  })
)

export default function Product({ name, url, logo, images, description }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs item>
            <Typography gutterBottom variant="h4" component="h2">
              {name}
            </Typography>
            {description}
          </Grid>
          <Grid xs={12} md={3} item>
            {url ? <a target="_blank" href={url}>{logo}</a> : logo}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
