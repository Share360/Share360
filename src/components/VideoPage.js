import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCategories() {
        if (this.props.videos[this.props.params.id].cat2 && this.props.videos[this.props.params.id].cat3) {
            return (
                <p className="text-capitalize"><b>Categories: </b>{this.props.videos[this.props.params.id].cat1} | {this.props.videos[this.props.params.id].cat2} | {this.props.videos[this.props.params.id].cat3}</p>
            );
        } else if (this.props.videos[this.props.params.id].cat2) {
            return (
                <p className="text-capitalize"><b>Categories: </b>{this.props.videos[this.props.params.id].cat1} | {this.props.videos[this.props.params.id].cat2}</p>
            );
        } else if (this.props.videos[this.props.params.id].cat3) {
            return (
                <p className="text-capitalize"><b>Categories: </b>{this.props.videos[this.props.params.id].cat1} | {this.props.videos[this.props.params.id].cat3}</p>
            );
        }
        return (
            <p className="text-capitalize"><b>Category: </b>{this.props.videos[this.props.params.id].cat1}</p>
        );
    }

    renderDisqus() {
        var disqus_config = function () {
            this.page.url = "share-360.herokuapp.com/#/" + this.props.params.id;
            this.page.identifier = this.props.params.id;
        };
        var d = document, s = d.createElement('script');
        s.src = '//share-360.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }

    render() {

        return (
            <div className="container-fluid">
                
                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/-xNN-bJQ4vI" frameBorder="0" allowFullScreen></iframe>*/}
                <a-scene embedded id="video-player">
                    <a-assets>
                        <video id="video" autoPlay loop crossOrigin src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/"></video>
                    </a-assets>
                    <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
                </a-scene>
                
                <h1>{this.props.videos[this.props.params.id].title}</h1>
                <p><Link to="/profile">Uploader</Link> (Join Users table on uploader_id)</p>
                <p><i>Uploaded: {this.props.videos[this.props.params.id].timestamp}</i></p>
                <p><b>Description: </b>{this.props.videos[this.props.params.id].description}</p>
                {this.renderCategories()}
                <br />
                <div id="disqus_thread"></div>
                {this.renderDisqus.bind(this)()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        videos: state.videos
    };
}

export default connect(mapStateToProps)(VideoPage);