import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Styles from './header.less';

const DenseAppBar = ({ title }) => (
  <div className={Styles.root}>
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
        <div className={Styles.menuButton}>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

DenseAppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DenseAppBar;
