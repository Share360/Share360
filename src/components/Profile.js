import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Profile extends Component {


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
        return this.props.users.map((user) => {
            if(user.id === 1)
            return (
                <div key={user.id} className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src={user.profile_url} className="img-circle prof-img" />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="text-container">
                                                <div className="text-bottom">
                                                    <p className="prof-head-tag">Username: <a href="#" className="prof-title">{user.username}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <div className="text-container">
                                                <div className="text-middle">
                                                    <button className="btn btn-lg prof-upload-btn">
                                                        <span className="glyphicon glyphicon-upload" aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <p className="prof-head-tag">E-Mail: <a href="#" className="prof-link">{user.email}</a></p>
                                    <p className="prof-head-tag">Description:</p>
                                    <p className="span">{user.description}</p>
                                    <hr />
                                    <h4>Uploaded Videos</h4>
                                    {this.showVideos()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        });
    }


    render() {
        return (
            <div>
                {this.showProfile()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        users: state.users,
        videos: state.videos
    };
}

export default connect(mapStateToProps)(Profile);
