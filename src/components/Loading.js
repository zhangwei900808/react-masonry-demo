import styles from '../assets/css/Loading.css';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet(theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
}));

class Loading extends React.Component {
  static defaultProps = {
    isHidden: true
  };

  static propTypes = {
    isHidden: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.isHidden
      ? null
      : <div className={'loading'}>
          <CircularProgress className={this.props.classes.progress} />
        </div>;
  }
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Loading);