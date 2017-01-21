import React, { Component } from 'react';

import FeaturedVideos from './featuredPageVideos';

class Featured extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <a-scene id="featuredCanvas" embedded>
                            <a-assets>
                                <video id="video" src="./assets/explore360.mp4" crossOrigin></video>
                            </a-assets>
                            <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
                        </a-scene>
                        <div className="feat-banner">
                            <p>Featured Experience</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <FeaturedVideos />
                </div>
            </div>
        );
    }
}

export default Featured;
