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
import styles2 from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

// Sections for this page
import ProductSection from './Sections/ProjectSection.js';
import TeamSection from './Sections/WorkSection.js';
import WorkSection from './Sections/ContactSection.js';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function LandingPage() {
  const classes = useStyles();
  const classes2 = useStyles2();
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
                Hi there! I'm a CS graduate student at the University of Iowa. I
                am aspiring to be a full-stack Web Developer. If you wanna know
                more about me, click right away.
              </h4>
              <Button
                className={classes2.navLink}
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
