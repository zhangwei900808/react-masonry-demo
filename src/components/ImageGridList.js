import styles from '../assets/css/ImageGridList.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgsData from '../assets/data/imgsData';
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: 0
};
export default class ImageGridList extends React.Component {
    constructor(props){
        super(props)
    }
    onImageMouseMove(event) {
        event = event.nativeEvent;
        const target = event.target;
        if (target.tagName.toLowerCase() === 'img') {
            target.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
        }
    }
    render(){
        return (
                <div>
                    <Masonry
                        className={'masonry'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        {
                            (
                                imgsData.map(img=>{
                                    return (
                                        <div key={img.id} className="cell" onMouseMove={this.onImageMouseMove}>
                                            <Link className={'link'} to={`/image/${img.id}`}>
                                                <div  className="image-wrapper">
                                                    <img src={img.src} />
                                                </div>
                                            </Link>                                            
                                        </div>
                                        
                                    )
                                })
                            )
                        }
                    </Masonry>
                </div>
            )
    }
}