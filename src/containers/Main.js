import styles from '../assets/css/ImageGridList.css';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';

import ImageGridList from '../components/ImageGridList'
import Loading from '../components/Loading'


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

class Main extends React.Component {
    constructor(props){
        super(props) 
        this.resizeListener = this.resizeListener.bind(this);
    }
    componentDidMount(){
        window.addEventListener('resize', this.resizeListener);
        this.resizeListener();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
    resizeListener=()=> {
        console.log(this.rootRef)
        /* reset size of masonry-container when window size change */
        const node = this.rootRef
        // try to get cell width
        const temp = document.createElement('div');
        temp.setAttribute('class', 'cell');
        document.body.appendChild(temp);

        const cellWidth = temp.offsetWidth,
        cellMargin = 8,
        componentWidth = cellWidth + 2 * cellMargin,
        maxn = Math.floor(document.body.offsetWidth / componentWidth);
        console.log(`componentWidth=${componentWidth}`)
        console.log(`document.body.offsetWidth=${document.body.offsetWidth}`)
        try {
            console.log(`maxn=${maxn * componentWidth}`)
            node.style.width = String(`${maxn * componentWidth}px`);
        } catch (e) {}

        document.body.removeChild(temp);
    }
    onOpenPlayer=()=>{
        this.props.history.push('/player');
    }
    onGithub=()=>{
        window.location.href="https://github.com/zhangwei900808/react-masonry-demo";
    }
    render(){
        
        return (
            <div className={this.props.classes.root}>
                <AppBar position="fixed" color="accent">
                        <Toolbar>
                            <IconButton color="contrast" aria-label="Menu" onClick={this.onOpenPlayer}>
                                <MenuIcon />
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
                            <ImageGridList/>
                            <Loading isHidden={this.props.isLoading} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Main);