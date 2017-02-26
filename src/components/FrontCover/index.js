import React, { PropTypes, Component } from 'react';
import classnames                      from 'classnames';
import VideoItem                       from '../VideoItem';
import {Link}                          from 'react-router'

import './style.css';

import logo       from './logo.png';
import iphone     from './iphone.png';
import magazine0  from './magazine0.png';
import magazine1  from './magazine1.png';
import magazine2  from './magazine2.png';

import Video      from 'react-html5video';
import promoVideo from './trump.mp4';

export default class FrontCover extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    const videoItemName = 'THE LADBIBLE';
    return (
      <div className={classnames('FrontCover', className)} {...props}>
        <div className="App-header">

          <div className="navbar">
            <div className="nav-wrapper">
              <div>
                <Link to='/login' className='btn btn--login btn--nav' onClick={this._login}>Register</Link>
                <Link to='/login' className='btn btn--login btn--nav' onClick={this._login}>Login</Link>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="bannerBox">
              <div className="bannerBox-left">
                <div className="logoSquare-top">
                  <img className="logoImg" src={logo} />
                </div>
                <div className="logoSquare-bottom">Watch And Create FREE Short Videos From Your News Articles. Capture The Attention Of Your Audience In Less Than 10 Seconds!</div>
              </div>
              <div className="bannerBox-right floating">
                <img className="iphoneImg" src={iphone} />
                <Video className="promoVideo" autoPlay loop muted>
                  <source src={promoVideo} type="video/mp4" />
                </Video>
              </div>

              <div className="triangle">
                <div className="arrow-up"></div>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="bannerBox">
              <div className="magazine-topSection">
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
              <div className="magazine-bottomSection">
                <span>from fashion to politics VEED takes news articles you love..</span>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="bannerBox">
              <div className="text-container">
                  <span className="strikethrough">Amnesty International says “toxic” fear-mongering by anti-establishment politicians,</span> <span className="strikethrough">among them</span> President Donald Trump <span className="strikethrough">and the leaders of Turkey, Hungary and the</span> <span className="strikethrough">Philippines,</span> is contributing to a global pushback against human rights. <span className="strikethrough"> Releasing its</span> <span className="strikethrough">408-page annual report on rights abuses around the world Wednesday,</span> the Amnesty International described 2016 as “the year when <span className="strikethrough">the cynical use of 'us vs. them'</span> <span className="strikethrough">narratives of</span> blame, hate and fear took on a global prominence to a level not seen since <span className="strikethrough">the 1930s,” when </span> Adolf Hitler <span className="strikethrough">rose to power in Germany. Amnesty named </span> <span className="strikethrough">Trump, Hungarian Prime Minister Viktor Orban, Turkish President Tayyip Erdogan and </span> <span className="strikethrough"> Philippines President Rodrigo Duterte among leaders it said are “exert a toxic agenda </span> <span className="strikethrough"> that hounds, scapegoats and dehumanises entire groups of people.” </span> “Toxic” rhetoric employed by Trump in his election campaign exemplified “the global trend of angrier and more divisive politics,” Amnesty said. <span className="float-right">(John Leicester via The independent, 2017)</span>
              </div> 
              <div className="text-bottomSection"><span>..gets rid of all the junk..</span></div>
            </div>
          </div>

          <div className="banner">
            <div className="bannerBox">
              <VideoItem videoItemName={videoItemName}/>
              <div className="videoItem-bottomSection"><span>..then finds and uses any relevant images, <br /> gifs or videos to create cool and <br /> short videos like this one!</span></div>
            </div>
          </div>

          <div className="banner footer-color">
            <div className="bannerBox">
            </div>
          </div>

        </div>
      </div>
    );
  }

  _login () {
    console.log("login button is pressed!");
  }
}