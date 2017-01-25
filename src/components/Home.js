import React, { Component } from 'react';
import { connect } from 'react-redux'
class Home extends Component {
    showFeaturedVideos() {
        return this.props.videos.map((video) => {
            return (
              // add date modifer
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
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    }

}

export default connect(mapStateToProps)(Home);