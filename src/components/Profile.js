import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleEdit, toggleProfile } from '../actions/editModeActions';
import profileActions from '../actions/profileActions';


import Modal from './Modal';

class Profile extends Component {
    componentDidMount() {
        this.props.dispatch(profileActions.getProfileById(this.props.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id !== this.props.params.id) {
            nextProps.dispatch(profileActions.getProfileById(nextProps.params.id));
        }
    }

    showVideos() {
        return this.props.videos.map((video) => {
            if(video.user_id === 5)
                return (

                    <div key={video.id} className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <a href="#" className="thumbnail">
                                    <img src={video.thumbnail} className="img-responsive" />
                                </a>
                            </div>
                            <div className="col-md-2">
                                <a href="#" className="prof-title prof-head-tag">{video.title}</a>
                            </div>
                            <div className="col-md-7">
                                {video.description}
                            </div>
                            <div className="col-md-1">
                                <div className="text-container">
                                    <div className="text-middle">
                                        <button className="btn btn-lg video-btn-remove">
                                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                        </button>
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
                    <div className="col-md-12 full-width">
                        <div className="panel">
                            <div className="panel-heading prof-panel-heading">
                                <div className="row">
                                    <div className="prof-sub-panel-head">
                                        <div className="col-md-1">
                                            <div className="profile-img-container">
                                                <img src={this.props.userProfile.profile_url} className="img-circle prof-img" />
                                                <a className="edit-btn"
                                                   href="#"
                                                   onClick={(e) => {(e).preventDefault();
                                                       {this.props.edit.editMode ? this.props.toggleProfile(user) : this.props.toggleEdit(user)}
                                                       console.log(this.props.edit.editMode)
                                                   }}>{this.props.edit.editMode ? 'Cancel' : 'Edit'}</a>
                                                {this.props.edit.editMode ? <div className="editable"><span className="glyphicon glyphicon-pencil"></span></div> : ''}
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="text-container">
                                                <div className="text-bottom">
                                                    <p className="prof-head-tag">Username: {this.props.edit.editMode ? <span><span className="prof-username">{this.props.userProfile.username}</span><span className="glyphicon glyphicon-pencil editable" aria-hidden="true"></span></span> : <span className="prof-username">{this.props.userProfile.username}</span>}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <div className="text-container">
                                                <button className="btn prof-upload-btn" type="button" data-toggle="modal" data-target="#myModal">
                                                    <span className="glyphicon glyphicon-upload" aria-hidden="true"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body prof-details-container">
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
                <Modal />
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

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({toggleEdit: toggleEdit, toggleProfile: toggleProfile}, dispatch)
//
// }

function mapStateToProps(state){
    return {
        users: state.users,
        videos: state.videos,
        edit: state.editProfile,
        userProfile: state.userProfile,
        loginStatus: state.loginStatus
    };
}

export default connect(mapStateToProps)(Profile);