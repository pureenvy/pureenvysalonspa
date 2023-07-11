import { makeStyles, useTheme } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import BookIcon from '@material-ui/icons/Book'
import Button from '@material-ui/core/Button'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import EventIcon from '@material-ui/icons/Event'
import ExploreIcon from '@material-ui/icons/Explore'
import { Helmet } from 'react-helmet'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import MenuIcon from '@material-ui/icons/Menu'
import PeopleIcon from '@material-ui/icons/People'
import PolicyIcon from '@material-ui/icons/Policy'
import JobIcon from '@material-ui/icons/Work'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 280

const navigation = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    text: 'Schedule an Appointment',
    icon: <EventIcon />,
    link: '/appointments',
  },
  {
    text: 'Meet the Team',
    icon: <PeopleIcon />,
    link: '/team',
  },
  { text: 'Experiences', icon: <MenuBookIcon />, link: '/experiences' },
  { text: 'Weddings', icon: <BookIcon />, link: '/weddings' },
  { text: 'Products', icon: <LocalMallIcon />, link: '/products' },
  { text: 'Location & Hours', icon: <ExploreIcon />, link: '/location' },
  { text: 'Policies', icon: <PolicyIcon />, link: '/policies' },
  { text: 'Employment Opportunities', icon: <JobIcon />, link: '/jobs' },
]

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(14),
    },
  },
  appBarHome: {
    boxShadow: 'none',
  },
  logo: {
    height: '150px',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
      marginTop: theme.spacing(1),
    },
  },
}))

function Container({ window, children, location: { pathname } }) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [pageTitle, setPageTitle] = React.useState()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navigation.map(({ text, icon, link, target }) => (
          <ListItem button component="a" key={text} href={link} target={target}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component="a"
            startIcon={<CardGiftcardIcon />}
            href={'https://na2.meevo.com/EgiftApp/home?tenantId=500570'}
            target={'_blank'}
          >
            Purchase Gift Card
          </Button>
        </ListItem>
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <Helmet onChangeClientState={(newState) => setPageTitle(newState.title)}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={pathname === '/' ? classes.appBarHome : undefined}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <a href="/">
              <img src="/logo.png" alt={pageTitle} className={classes.logo} />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <Typography align="center" variant="caption" component="p">
          &copy; {new Date().getFullYear()} Pure Envy Salon & Spa
        </Typography>
      </main>
    </div>
  )
}

export default Container
