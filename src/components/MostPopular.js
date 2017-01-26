import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getVideosByLikesActions } from '../actions/getVideosByLikesActions';


class MostPopular extends Component {

    getVideosByLikes() {
        this.props.dispatch( getVideosByLikesActions() );
    }

    componentDidMount() {
        this.getVideosByLikes();
    }

    renderVideos() {
        return this.props.categoryVideos.videos.map( ( video, index ) => {
            return (
                <div
                    key={ index }
                    className="col-sm-4 col-md-4 col-md-4 category-list">
                    <div className="thumbnail">
                        <img
                            className="clickable"
                            onClick={ () => {window.location = "/#/video/" + video.id} }
                            src={ video.thumbnail_url }
                            alt={ video.title }
                        />
                    </div>
                    <div className="videoContentBox">
                        <h3>
                            <Link to={"/video/" + video.id}>{video.title}</Link>
                        </h3>
                        <hr/>
                        <Link to={"/profile/" + video.uploader_id}>{video.username}</Link>
                    </div>
                </div>
            );
        });
    }

    render(){

        return(
          <div>
              <div>
                  <h1>Most Popular</h1>
              </div>
              <div className="container-fluid">
                  <div className="row">
                      {/*{ this.renderVideos() }*/}
                  </div>
              </div>
          </div>


        )
    }
}

function mapStateToProps( state ) {
    return {
        mostPopVideos: state.mostPopVideos
    }
}

export default connect( mapStateToProps )( MostPopular );