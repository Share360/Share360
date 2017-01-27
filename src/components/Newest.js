import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Sidebar from './Container/Sidebar';
import { getRecentVideos } from '../actions/videoActions';

class Newest extends Component {

  getAllVideos() {
    this.props.dispatch( getRecentVideos() );
  }

  componentDidMount () {
    this.getAllVideos();
  }
// 2017-01-26T20:48:30.629Z
  // changeTimeFormat(time) {
  //
  // }

  renderVideos() {
    return this.props.videos.videos.map( (video, index ) => {
      console.log(video)
      return (
        <div
          key={ index }
          className="col-sm-4 col-sm-4 col-sm-4 category-list">
            <div className="thumbnail">
                <img
                    data={video.upload_date}
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

  render() {
    return(
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-12 col-md-12">
                  <h1 className="text-capitalize bottom-line">Newest</h1>
              </div>
          </div>
          <div className="row">
              {this.renderVideos()}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos : state.allRecentVideos
  };
}

// function mapDispatchToProps( dispatch ) {
//   return bindActionCreators({ getVideos : })
// }

export default connect( mapStateToProps )( Newest );
