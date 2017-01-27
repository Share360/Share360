import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import videoActions from '../actions/videoActions';
import VideoPlayer from './VideoPlayer';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComments: false
        }
    }

    componentDidMount() {
        this.getVideoDetails(this.props);
        if (this.props.loginStatus.loggedIn) {
            this.checkFavorite(this.props);
        }
        this.showComments(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            this.getVideoDetails(nextProps);
            if (nextProps.loginStatus.loggedIn) {
                this.checkFavorite(nextProps);
            }
            this.setState({
                showComments: false
            });
        }
        this.showComments(nextProps);
    }

    checkFavorite(passedProps) {
        passedProps.dispatch(videoActions.checkFavorite(passedProps.params.id, passedProps.loginStatus.id));
    }

    getVideoDetails(passedProps) {
        passedProps.dispatch(videoActions.getVideoById(passedProps.params.id));
    }

    addFavorite() {
        if (!this.props.loginStatus.loggedIn) {
            alert('Please log in or sign up to add this video to your favorites.')
        } else {
            this.props.dispatch(videoActions.addFavorite(this.props.params.id, this.props.loginStatus.id));
        }
    }

    removeFavorite() {
        if (!this.props.loginStatus.loggedIn) {
            alert('Please log in or sign up to edit favorites.')
        } else {
            this.props.dispatch(videoActions.removeFavorite(this.props.params.id, this.props.loginStatus.id));
        }
    }

    renderButton() {
        if (!this.props.videoDetails.inFavorites) {
            return (
                <div className="col-xs-2">
                    <button id="favButton" onClick={this.addFavorite.bind(this)} className="btn btn-custom">Add Favorite</button>
                </div>
            );
        } else {
            return (
                <div className="col-xs-2">
                    <button id="favButton" onClick={this.removeFavorite.bind(this)} className="btn btn-custom">Remove Favorite</button>
                </div>
            );
        }
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

    showComments(passedProps) {
        var disqus_config = function () {
            this.page.url = "share-360.herokuapp.com/#/video/" + passedProps.params.id;
            this.page.identifier = passedProps.params.id;
        };
        var d = document, s = d.createElement('script');
        s.src = '//share360-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        this.setState(
            {
                showComments: true
            }
        );
    }

    render() {
        return (
            <div className="container-fluid">

                    <VideoPlayer videosource={this.props.videoDetails.url} />

                <div className="video-info">
                    <div className="row">
                        <div className="col-xs-10">
                            <h1>{this.props.videoDetails.title}</h1>
                            <p><i>Uploaded: {this.props.videoDetails.upload_date}</i></p>
                            <p><b>Uploader: </b><Link to={"/profile/" + this.props.videoDetails.uploader_id}>{this.props.videoDetails.username}</Link></p>
                            <p><b>Description: </b>{this.props.videoDetails.description}</p>
                            {this.renderCategories()}
                        </div>
                        
                        {this.renderButton()}
                        
                    </div>
                </div>

                <br />
                <br />

                {this.state.showComments ? ( <div id="disqus_thread"></div> ) : ( <button className="btn btn-custom center-block" onClick={this.showComments.bind(this)}>Load Comments</button> ) }

                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        videoDetails: state.videoDetails,
        loginStatus: state.loginStatus
    };
}

export default connect(mapStateToProps)(VideoPage);