import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { mostPopularActions } from '../actions/mostPopularActions';


class MostPopular extends Component {

    getMostPopularVideos() {
        this.props.dispatch( mostPopularActions() );
    }

    componentDidMount() {
        this.getMostPopularVideos();
    }


    renderVideos() {
        return this.props.mostPopVideos.mostPopVideos.map( ( video, index ) => {
            return (
                <div
                    key={ index }
                    className="col-xs-10 col-sm-7 col-md-4 col-md-4 col-lg-4 category-list">
                    <div className="thumbnail featuredThumbs">
                        <img
                            className="clickable category-images"
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


                        <div><b>Favorites: </b>{ video.most_popular }</div>

                    </div>
                </div>
            );
        });
    }

    render(){
        return(
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-12 col-md-12">
                      <h1 className="text-capitalize bottom-line">Most Popular</h1>
                  </div>
              </div>
              <div className="row">
                  { this.renderVideos() }
              </div>
          </div>


        )
    }
}

function mapStateToProps( state ) {
    return {
        mostPopVideos: state.mostPopVideos,
        videos: state.videos
    }
}

export default connect( mapStateToProps )( MostPopular );
