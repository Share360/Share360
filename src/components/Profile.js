import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleEdit, toggleProfile } from '../actions/editModeActions';
import { getProfileById, getVideoByUser, deleteUserVideo, subscribe } from '../actions/profileActions';
import VideoModal from './VideoModal';
import Modal from './Modal';
import { Link } from 'react-router';
import ThumbnailCreator from './ThumbnailCreator';
class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getProfileById(this.props.params.id);
        this.props.getVideoByUser(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id !== this.props.params.id) {
            nextProps.getProfileById(nextProps.params.id);
            nextProps.getVideoByUser(nextProps.params.id);
        }
    }
    deleteVideo(videoid, uploaderid) {
        console.log(videoid + " " + uploaderid);
        this.props.deleteVideo(videoid, uploaderid);
    }

    handleSubscribe() {
        if (!this.props.loginStatus.loggedIn) {
            alert('Please log in or sign up to subscribe.')
        } else {
            this.props.subscribe(this.props.params.id, this.props.loginStatus.id);
        }
    }

    confirm(videoid, uploaderid) {
        console.log(videoid + " " + uploaderid);
        alert("are you sure you would like to delete this video?");
    }
    showVideos() {
        console.log(this.props.userVideos);
        if(this.props.userVideos)
        return this.props.userVideos.map((video) => {
                return (
                    <div key={video.id} className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-4">
                                <Link to={"/video/" + video.id} className="thumbnail featuredThumbs">
                                    <img src={video.thumbnail_url} className="img-responsive" />
                                </Link>
                            </div>
                            <div className="col-sm-3">
                                <Link to={"/video/" + video.id} className="prof-title prof-head-tag">{video.title}</Link>
                            </div>
                            <div className="col-sm-4">
                                {video.description}
                            </div>
                            <div className="col-sm-1">
                                <div className="text-container">
                                    <div className="text-middle">
                                        {this.props.edit.editMode ? <button className="btn btn-lg video-btn-remove" onClick={this.deleteVideo.bind(this, video.id, video.uploader_id)}>
                                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                        </button> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            });
        }

    showProfile() {
        return (
            <div className="container-fluid prof-wrapper">
                <div className="row">
                    <div className="col-sm-12 full-width">
                        <div className="panel prof-panel">
                            <div className="panel-heading prof-panel-heading">
                                <div className="row">
                                    <div className="prof-sub-panel-head">
                                        <div className="col-sm-1">
                                            <div className="profile-img-container">
                                                <img src={this.props.userProfile.profile_url} className="img-circle prof-img" />
                                                {this.props.loginStatus.id === Number(this.props.params.id) ? <a className="edit-btn"
                                                   href="#"
                                                   onClick={(e, user) => {
                                                       (e).preventDefault();
                                                       {this.props.edit.editMode ? this.props.toggleProfile(user) : this.props.toggleEdit(user)}
                                                       console.log(this.props.edit.editMode)
                                                        }}>{this.props.edit.editMode ? 'Cancel' : 'Edit'}</a> : ''}
                                                {this.props.edit.editMode ? <div className="editable"><span data-toggle="modal" data-target="#myModal" className="glyphicon glyphicon-pencil"></span></div> : ''}
                                            </div>
                                        </div>
                                        <div className="col-sm-10">
                                            <div className="text-container">
                                                <div className="text-bottom">
                                                    <p className="prof-head-tag">Username: {this.props.edit.editMode ? <span><span className="prof-username">{this.props.userProfile.username}</span><span className="glyphicon glyphicon-pencil editable" aria-hidden="true"></span></span> : <span className="prof-username">{this.props.userProfile.username}</span>}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-1">
                                            <div className="text-container">
                                                {this.props.loginStatus.id === Number(this.props.params.id) ? <button className="btn prof-upload-btn" type="button" data-toggle="modal" data-target="#videoModal">
                                                    Upload Video <span className="glyphicon glyphicon-upload" aria-hidden="true"></span>
                                                </button> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body prof-details-container">
                                {this.props.loginStatus.loggedIn && this.props.loginStatus.id !== Number(this.props.params.id) ? <button onClick={this.handleSubscribe.bind(this)} className="btn btn-custom subscribeBtn" id="sub-btn">Subscribe</button> : null }
                                <p className="prof-head-tag">E-Mail: {this.props.edit.editMode ? <span><a href="#" className="prof-link">{this.props.userProfile.email}</a><span className="glyphicon glyphicon-pencil editable" aria-hidden="true"></span></span> : <a href="#" className="prof-link">{this.props.userProfile.email}</a>}</p>
                                <p className="prof-head-tag">Description: {this.props.edit.editMode ? <span className="glyphicon glyphicon-pencil editable" aria-hidden="true"></span> : ''}</p>
                                <p className="span">{this.props.userProfile.description}</p>
                                <hr />
                                <h4>Uploaded Videos</h4>
                                {this.showVideos()}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal/>
                <VideoModal { ...this.props } />
            </div>

        );
    }


    render() {
        console.log(this.props.userProfile);
        return (
            <div>
                {this.showProfile()}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            toggleEdit: toggleEdit,
            toggleProfile: toggleProfile,
            getProfileById: getProfileById,
            getVideoByUser: getVideoByUser,
            deleteVideo: deleteUserVideo,
            subscribe: subscribe
    }, dispatch)

}

function mapStateToProps(state) {
    return {
        users: state.users,
        videos: state.videos,
        edit: state.editProfile,
        userProfile: state.userProfile,
        loginStatus: state.loginStatus,
        userVideos: state.userProfile.userVideos
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

