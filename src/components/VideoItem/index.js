import React, { PropTypes, Component } from 'react';
import classnames                      from 'classnames';

import './style.css';
import testVideo from './ladbible.mp4';
import Video     from 'react-html5video';

export default class VideoItem extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  componentDidMount() {
    setTimeout(function(){ 
      // pause video 1, do 0. video 2, do 1. simple
      // document.getElementsByTagName('video')[0].pause(); 
    }, 3000);
    console.log(document.getElementsByTagName('video'));
  }


  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('VideoItem', className)} {...props}>

          <div className="inner">
            <div className="video-title">
              <div className="video-font"> {this.props.videoItemName} </div>
            </div>
            <Video className="squareVideo" width="400" height="400" autoPlay loop muted
                // poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {
                    // Do stuff
                }}>
                <source src={testVideo} type="video/mp4" />
            </Video>
          </div>
          <div className="shadow"></div>

      </div>
    );
  }
}