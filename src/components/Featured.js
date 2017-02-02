import React, { Component } from 'react';

import FeaturedVideos from './featuredPageVideos';

class Featured extends Component {
    constructor(props) {
        super(props);
            this.state = { audioToggleOn: false };

            this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(prevState => ({
            audioToggleOn: !prevState.audioToggleOn

        }))
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <a-scene id="featuredCanvas" embedded>
                            <a-assets>
                                <video id="video" src="https://s3-us-west-2.amazonaws.com/share360videosbucket/explore360.mp4" crossOrigin></video>
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
