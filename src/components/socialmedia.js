import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import PinterestIcon from '@material-ui/icons/Pinterest'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
    root: {
      padding: theme.spacing(3),
    },
  })
)

const SocialButton = ({ url, icon, name }) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="primary"
      component="a"
      href={url}
      target="_blank"
      size="small"
      startIcon={icon}
      className={classes.button}
    >
      Follow on {name}
    </Button>
  )
}

const SocialMedia = ({ facebook, pinterest, instagram, twitter, style }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={style}>
      {facebook && (
        <SocialButton url={facebook} icon={<FacebookIcon />} name="Facebook" />
      )}
      {pinterest && (
        <SocialButton
          url={pinterest}
          icon={<PinterestIcon />}
          name="Pinterest"
        />
      )}
      {instagram && (
        <SocialButton
          url={instagram}
          icon={<InstagramIcon />}
          name="Instagram"
        />
      )}
      {twitter && (
        <SocialButton url={twitter} icon={<TwitterIcon />} name="Twitter" />
      )}
    </div>
  )
}

export default SocialMedia
