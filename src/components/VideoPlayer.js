import React from 'react';

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <a-scene embedded id="video-player">
                    <a-assets>
                        <video id="video" autoPlay loop crossOrigin src={this.props.videosource}></video>
                    </a-assets>
                    <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
                    <a-camera position="0 0 0">
                        <a-cursor id="cursor" color="#1CC1D7"></a-cursor>
                    </a-camera>
                    
                    <a-entity video-controls="src:#video; size:2.0; barColor:#1CC1D7; textColor: white; infoTextTop:Click button or press spacebar to play/pause.; infoTextBottom:Double click outside of controls to hide.; size:2.0"></a-entity>
                    
                </a-scene>        
        );
    }
}