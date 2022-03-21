import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import ForumIcon from '@mui/icons-material/Forum';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

const MessageMenu: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const messages: string[] = ['xxx', 'yyyy'];

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <List>
        <ListItem style={{ borderBottom: '1px solid #e0e0eb' }}>
          <ListItemIcon className={classes.menuItemIcon}>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText
            style={{ textTransform: 'uppercase', fontSize: 50, fontWeight: 'bold' }}
            primary="messages inbox"
          />
        </ListItem>
      </List>
      <List component="nav" className={classes.appMenu} disablePadding>
        <ListItem button className={classes.menuItem}>
          <ListItemIcon className={classes.menuItemIcon}>
            <MarkUnreadChatAltIcon />
          </ListItemIcon>
          <ListItemText primary="Unread Messages" />
        </ListItem>
        <ListItem button onClick={handleClick} className={classes.menuItem}>
          <ListItemIcon className={classes.menuItemIcon}>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Messages" />
          {open ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            {messages.map((message, i) => {
              return (
                <ListItem key={i} button className={classes.menuItem}>
                  <ListItemText inset primary={message} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </List>
    </>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(() =>
  createStyles({
    appMenu: {
      width: drawerWidth,
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: 'red',
    },
  }),
);

export default MessageMenu;
