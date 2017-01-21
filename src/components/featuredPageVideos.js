import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class FeaturedVideos extends Component {
    showFeaturedVideos() {
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

function mapStateToProps(state) {
    return {
        videos: state.videos
    }

}

export default connect(mapStateToProps)(FeaturedVideos);