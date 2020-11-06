import { makeStyles, useTheme } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import { Helmet } from 'react-helmet'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import MenuIcon from '@material-ui/icons/Menu'
import PeopleIcon from '@material-ui/icons/People'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ExploreIcon from '@material-ui/icons/Explore'
import PolicyIcon from '@material-ui/icons/Policy'
import EventIcon from '@material-ui/icons/Event'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HangerIcon from './icons/hanger'

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
    link: 'http://envysalonblm.mysalononline.com/Booking/?sid=0',
    target: '_blank',
  },
  {
    text: 'Artists',
    icon: <PeopleIcon />,
    link: '/artists',
  },
  { text: 'Expirences', icon: <MenuBookIcon />, link: '/expirences' },
  {
    text: 'PE Boutique',
    icon: <HangerIcon />,
    link: 'https://pureenvyboutique.maverickthecollection.com/',
    target: '_blank',
  },
  { text: 'Products', icon: <LocalMallIcon />, link: '/products' },
  { text: 'Location & Hours', icon: <ExploreIcon />, link: '/location' },
  { text: 'Policies', icon: <PolicyIcon />, link: '/policies' },
]

const useStyles = makeStyles((theme) => ({
  root: {

  },
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
  },
  appBarHome: {
    background: 'rgb(106,96,157,0.75)',
    boxShadow: 'none'
  }
}))

function Container({ window, children, location: {pathname} }) {
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
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <Helmet
        onChangeClientState={(newState) => setPageTitle(newState.title)}
      >
        <link href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap" rel="stylesheet"></link>
        </Helmet>
      <CssBaseline />
      <AppBar position="fixed" className={pathname === '/' ? classes.appBarHome : undefined}>
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
          <Typography component="h1" variant="h6" noWrap>
            {pageTitle}
          </Typography>
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
