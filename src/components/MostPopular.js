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

    // componentWillReceiveProps( nextProps ) {
    //     if( this.props.mostPopVideos.mostPopVideos !== nextProps.mostPopVideos.mostPopVideos ) {
    //         this.getMostPopularVideos();
    //     }
    // }

    renderVideos() {
        return this.props.mostPopVideos.mostPopVideos.map( ( video, index ) => {
            return (
                <div
                    key={ index }
                    className="col-sm-4 col-md-4 col-md-4 category-list">
                    <div className="thumbnail featuredThumbs">
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


                        <div><b>Favorites: </b>{ video.most_popular }</div>

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
                  <hr/>
              </div>
              <div className="container-fluid">
                  <div className="row">
                      { this.renderVideos() }
                  </div>
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