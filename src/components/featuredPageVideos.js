import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { mostPopularActions } from '../actions/mostPopularActions';


class FeaturedVideos extends Component {
    componentWillMount() {
        this.props.dispatch(mostPopularActions());
    }
    showFeaturedVideos() {
            if (this.props.mostPopVideos.mostPopVideos) {
                return this.props.mostPopVideos.mostPopVideos.map((video) => {
                    return (
                        <div key={video.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="featuredList">
                                <div className="thumbnail featuredThumbs">
                                    <a href={"/#/video/" + video.id}><img className="img-responsive featuredImg" src={video.thumbnail_url}/></a>
                                </div>
                                <div className="videoContentBox">
                                    <Link to={"/video/" + video.id} className="prof-title prof-head-tag"><h3>{video.title}</h3></Link>
                                    <hr />
                                </div>
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
        mostPopVideos: state.mostPopVideos
    }

}

export default connect(mapStateToProps)(FeaturedVideos);