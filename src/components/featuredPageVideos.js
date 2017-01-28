import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mostPopularActions } from '../actions/mostPopularActions'

class FeaturedVideos extends Component {

    showFeaturedVideos() {
            if (this.props.videos)
        return this.props.videos.map((video) => {
            return (
                <div key={video.id} className="col-sm-4 featuredList">
                    <div>
                        <a href="#" className="thumbnail"><img src={video.thumbnail} /></a>
                    </div>
                    <div className="videoContentBox">
                        <h3>{video.title}</h3>
                        <hr />
                        Username : {video.user_id}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 mostPopularTitle">
                        <h2>Most Popular</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {this.showFeaturedVideos()}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { mostPopularActions: mostPopularActions(dispatch) } );
}


function mapStateToProps(state) {
    return {
        videos: state.videos,
        mostPopVideos: state.mostPopVideos
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedVideos);