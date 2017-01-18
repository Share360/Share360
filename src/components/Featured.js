import React, { Component } from 'react';
import AudioCtrl from './audioController';
import aframe from 'aframe';

class Featured extends Component {
    render() {
        return (
            <div>
                <a-scene id="featuredCanvas" embedded>
                    <a-assets>
                        <video id="video" src="./assets/explore360.mp4" autoPlay loop crossOrigin></video>
                    </a-assets>
                    <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>

                </a-scene>
                <div className="feat-banner">
                    <p>Featured Experience</p>
                </div>
                <AudioCtrl />
            </div>
        );
    }
}

export default Featured;