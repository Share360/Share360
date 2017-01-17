import React, { Component } from 'react';
import aframe from 'aframe';

class Featured extends Component {
    render() {
        return (
            <div>
                <a-assets>
                    <video id="video" src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/" autoplay="false" loop="false" crossorigin></video>
                </a-assets>
                <a-scene id="featuredCanvas" embedded>
                    <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>

                </a-scene>
            </div>
        );
    }
}

export default Featured;