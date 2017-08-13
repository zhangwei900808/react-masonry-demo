import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class MusicPlyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playHandler() {
    console.log('on play');
  }

  pauseHandler() {
    console.log('on pause');
  }

  render() {
    const props = {
      "autoplay": true,
      "mutex": true,
      "preload": "metadata",
      "music": {
        "author": "Hans Zimmer/Richard Harvey",
        "url": "http://devtest.qiniudn.com/Preparation.mp3",
        "pic": "http://devtest.qiniudn.com/Preparation.jpg"
      }
    };

    return (
      <ReactAplayer {...props} onPlay={this.playHandler} onPause={this.pauseHandler}/>
    );
  }
}