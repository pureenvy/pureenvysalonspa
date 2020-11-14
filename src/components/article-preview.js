import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
    },
  })
)

export default ({ article }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia>
        <Img alt="" fluid={article.heroImage.fluid} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {article.title}
        </Typography>
        <Typography variant="caption">{article.publishDate}</Typography>
        {documentToReactComponents(article.description.json)}
        {article.tags &&
          article.tags.map((tag) => (
            <>
              <Chip key={tag} label={tag} color="secondary" />
              &nbsp;
            </>
          ))}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/blog/${article.slug}`}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}
