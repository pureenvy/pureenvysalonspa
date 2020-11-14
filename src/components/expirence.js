import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  })
)

export default function Expirence({ name, price, doesPriceGoUp }) {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid variant="h4" component="h2" container spacing={2}>
        <Grid xs={12} md={4} item>
          {name}
        </Grid>
        <Grid xs item>
          <Typography gutterBottom variant="h5" component="p">
            ${price} {doesPriceGoUp ? '' : '& up'}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
