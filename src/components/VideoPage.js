import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import videoActions from '../actions/videoActions';
import VideoPlayer from './VideoPlayer';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(videoActions.getVideoById(this.props.params.id));
    }

    renderCategories() {
        if (this.props.videoDetails.cat2 && this.props.videoDetails.cat3) {
            return (
                <p className="text-capitalize"><b>Categories: </b>{this.props.videoDetails.cat1} | {this.props.videoDetails.cat2} | {this.props.videoDetails.cat3}</p>
            );
        } else if (this.props.videoDetails.cat2) {
            return (
                <p className="text-capitalize"><b>Categories: </b>{this.props.videoDetails.cat1} | {this.props.videoDetails.cat2}</p>
            );
        } else if (this.props.videoDetails.cat3) {
            return (
                <p className="text-capitalize"><b>Categories: </b>{this.props.videoDetails.cat1} | {this.props.videoDetails.cat3}</p>
            );
        }
        return (
            <p className="text-capitalize"><b>Category: </b>{this.props.videoDetails.cat1}</p>
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
                
                <VideoPlayer videosource={this.props.videoDetails.url} />

                <div className="video-info">
                    <h1>{this.props.videoDetails.title}</h1>
                    <p><i>Uploaded: {this.props.videoDetails.upload_date}</i></p>
                    <p><b>Uploader: </b><Link to={"/profile/" + this.props.videoDetails.uploader_id}>{this.props.videoDetails.username}</Link></p>
                    <p><b>Description: </b>{this.props.videoDetails.description}</p>
                    {this.renderCategories()}
                </div>

                <br />

                <div id="disqus_thread"></div>
                {this.renderDisqus.bind(this)()}
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        videoDetails: state.videoDetails
    };
}

export default connect(mapStateToProps)(VideoPage);