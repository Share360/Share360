import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { mostPopularActions } from '../actions/mostPopularActions';


class FeaturedVideos extends Component {
    componentWillMount() {
        this.props.dispatch(mostPopularActions());
    }
    showFeaturedVideos() {
            if (this.props.mostPopularVideosReducer.mostPopularVideosReducer.mostPopVideos) {
                console.log(this.props.mostPopularVideosReducer.mostPopularVideosReducer.mostPopVideos)
                return this.props.mostPopularVideosReducer.mostPopularVideosReducer.mostPopVideos.map((video) => {
                    return (
                        <div key={video.id} className="col-sm-4 featuredList">
                            <div>
                                <a href="#" className="thumbnail"><img src={video.thumbnail_url}/></a>
                            </div>
                            <div className="videoContentBox">
                                <Link to={"/video/" + video.id} className="prof-title prof-head-tag"><h3>{video.title}</h3></Link>
                                <hr />
                            </div>
                        </div>
                    );
                });
            }
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
        videos: state.videos,
        mostPopularVideosReducer: state.mostPopularVideosReducer
    }

}

export default connect(mapStateToProps)(FeaturedVideos);