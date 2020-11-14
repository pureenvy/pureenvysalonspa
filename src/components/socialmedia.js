import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import PinterestIcon from '@material-ui/icons/Pinterest'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      background: theme.palette.common.black,
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.black,
        background: theme.palette.common.white,
      },
    },
    root: {
      padding: theme.spacing(3),
    },
  })
)

const SocialButton = ({ url, icon, name }) => {
  const classes = useStyles()

  return (
    <IconButton
      variant="contained"
      color="primary"
      component="a"
      href={url}
      target="_blank"
      size="large"
      className={classes.button}
      aria-label={`Follow on ${name}`}
    >
      {icon}
    </IconButton>
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
