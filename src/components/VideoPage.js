import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import videoActions from '../actions/videoActions';
import commentActions from '../actions/commentActions';
import VideoPlayer from './VideoPlayer';
import Comment from './Comment';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ""
        }
    }

    componentDidMount() {
        this.getVideoDetails(this.props);
        if (this.props.loginStatus.loggedIn) {
            this.checkFavorite(this.props);
        }
        this.getComments(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            this.getVideoDetails(nextProps);
            if (nextProps.loginStatus.loggedIn) {
                this.checkFavorite(nextProps);
            }
            this.getComments(nextProps);
        }
    }

    handleCommentChange(e) {
        this.setState({
            commentText: e.target.value
        });
    }

    handleCommentSubmit(e) {
        e.preventDefault();
        this.props.dispatch(commentActions.addComment(this.props.loginStatus.id, this.state.commentText, this.props.params.id));
        this.setState({
            commentText: ""
        });
    }

    checkFavorite(passedProps) {
        passedProps.dispatch(videoActions.checkFavorite(passedProps.params.id, passedProps.loginStatus.id));
    }

    getVideoDetails(passedProps) {
        passedProps.dispatch(videoActions.getVideoById(passedProps.params.id));
    }

    getComments(passedProps) {
        passedProps.dispatch(commentActions.getComments(passedProps.params.id));
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

    renderCommentInput() {
        if (this.props.loginStatus.loggedIn) {
            return(
                <div className="comment-input">
                    <form onSubmit={this.handleCommentSubmit.bind(this)}>
                        <textarea onChange={this.handleCommentChange.bind(this)} value={this.state.commentText} className="form-control" rows="3"></textarea>
                        <button style={{marginTop: 5}} type="submit" className="btn btn-block btn-custom">Submit</button>
                    </form>
                </div>
            );
        } else {
            return(
                <p>You must log in to post a comment.</p>
            );
        }
    }

    renderComments() {
        return this.props.videoDetails.comments.map((comment, index) => {
            return (
                <Comment key={index} {...comment} />
            );
        });
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
                
                <div className="comments-wrapper">
                    <h1>Comments</h1>
                    {this.renderCommentInput.bind(this)()}
                    <div className="comments">
                        <hr />
                        {this.renderComments.bind(this)()}
                    </div>
                </div>
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