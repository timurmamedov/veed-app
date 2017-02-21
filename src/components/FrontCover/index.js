import React, { PropTypes, Component } from 'react';
import classnames                      from 'classnames';
import VideoItem                       from '../VideoItem';

import './style.css';

import logo       from './logo.png';
import iphone     from './iphone.png';
import magazine0  from './magazine0.png';
import magazine1  from './magazine1.png';
import magazine2  from './magazine2.png';

import Video      from 'react-html5video';
import promoVideo from './promoVideo.mp4';

export default class FrontCover extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    const videoItemName = 'VOGUE';
    return (
      <div className={classnames('FrontCover', className)} {...props}>
        <div className="App-header">

          <div className="banner">
            <div className="bannerBox">
              <div className="bannerBox-left">
                <div className="logoSquare-top">
                  <img className="logoImg" src={logo} />
                </div>
                <div className="logoSquare-bottom">VEED’s content platform is the new way for marketeers and writers to create video for various markets, in a range of styles, for multiple channels at scale.</div>
              </div>
              <div className="bannerBox-right floating">
                <img className="iphoneImg" src={iphone} />
                <Video className="promoVideo" autoPlay loop muted>
                  <source src={promoVideo} type="video/mp4" />
                </Video>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="bannerBox">
              <div className="magazine-left">
                <img className="magazine0Img" src={magazine0} />
              </div>
              <div className="magazine-middle">
                <img className="magazine1Img" src={magazine1} />
              </div>
              <div className="magazine-right">
                <img className="magazine2Img" src={magazine2} />
              </div>
            </div>
          </div>

          <VideoItem videoItemName={videoItemName}/>

          <br /><br />

          <VideoItem videoItemName={videoItemName}/>

        </div>
      </div>
    );
  }
}