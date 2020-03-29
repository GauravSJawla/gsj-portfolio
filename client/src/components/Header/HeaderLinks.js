/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import DescriptionIcon from '@material-ui/icons/Description';

// core components
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='resume-tooltip'
          title='My Resume'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://drive.google.com/open?id=1_sCAcIJwls1UQkkmwJIr2UMbVNHxvB_7'
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            <DescriptionIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow me on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://twitter.com/singh_jawla'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <TwitterIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='linkedin-tooltip'
          title='Connect me on LinkedIn'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.linkedin.com/in/gaurav-singh-jawla/'
            target='_blank'
            className={classes.navLink}
          >
            <LinkedInIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='github-tooltip'
          title='Follow me on Github'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://github.com/GauravSJawla'
            target='_blank'
            className={classes.navLink}
          >
            <GitHubIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow me on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.instagram.com/jawlagaurav'
            target='_blank'
            className={classes.navLink}
          >
            <InstagramIcon />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
