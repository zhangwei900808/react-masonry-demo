import imageDetail from '../assets/css/ImageDetail.css';

import React from 'react'
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import Grid from 'material-ui/Grid';
import Img from 'react-image';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width:'100%',
    flexGrow: 1,
  },
  container:{
      margin:'60px auto'
  },
  flex: {
    flex: 1,
  },
}));

class ImageDetail extends React.Component{
    constructor(props){
        super(props)
    }
    onBackClick=(event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (this.props.history.length > 1) {
            this.props.history.goBack();
        } else {
            this.props.history.push('/');
        }
    }
    onGithub=()=>{
        window.location.href="https://github.com/zhangwei900808/react-masonry-demo";
    }
    render(){
        return (
            <div className={this.props.classes.root}>
                <AppBar position="fixed" color="accent">
                        <Toolbar>
                            <IconButton color="contrast" aria-label="ArrowBackIcon" onClick={this.onBackClick}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" className={this.props.classes.flex}>
                                React-Masonry-Demo
                            </Typography>
                            <Button color="contrast" onClick={this.onGithub}>GitHub</Button>
                        </Toolbar>
                </AppBar>
                <div ref={ref => (this.rootRef = ref)} className={this.props.classes.container}>
                    <Grid container spacing={0} align="center" justify="center">
                        <Grid item xs >
                            <div className={'image-outer'}>
                                <div className={'image'}>
                                    <Img
                                        src={require(`../assets/imgs/${this.props.match.params.id}.jpeg`)}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

ImageDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ImageDetail);