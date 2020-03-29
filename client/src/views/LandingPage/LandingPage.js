import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// @material-ui/icons
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';
import Footer from 'components/Footer/Footer.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import ProductSection from './Sections/ProductSection.js';
import TeamSection from './Sections/TeamSection.js';
import WorkSection from './Sections/WorkSection.js';

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require('assets/img/landing-background.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.typo}>
                <h1 className={classes.title}>Gaurav Singh Jawla</h1>
              </div>
              <h4>
                Hello! I'm a full-stack Web Developer living in Iowa City. If
                you wanna know more about me, click right away.
              </h4>
              <Button
                className={classes.navLink}
                color='transparent'
                size='lg'
                component={Link}
                to='/profile-page'
              >
                <EmojiPeopleIcon /> ABOUT ME
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
