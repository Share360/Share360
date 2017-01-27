import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import SideBar from './Container/Sidebar';
import { getVideosByCategoryActions } from  '../actions/categoryActions';

class Categories extends Component {

    getVideosByCategory( selectedCategory ) {
        this.props.dispatch( getVideosByCategoryActions(selectedCategory) );
    }

    componentDidMount() {
        this.getVideosByCategory(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params.id != nextProps.params.id) {
            this.getVideosByCategory(nextProps.params.id);
        }
    }

    renderVideos() {
        return this.props.categoryVideos.videos.map( ( video, index ) => {
          console.log(video);
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

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h1 className="text-capitalize bottom-line">{ this.props.params.id }</h1>
                    </div>
                </div>
                <div className="row">
                    { this.renderVideos() }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    categoryVideos: state.categoryVideos
  };
}

// function mapDispatchToProps( dispatch ) {
//   return bindActionCreators({ getVideosByCategoryActions: getVideosByCategoryActions }, dispatch)
// }

export default connect( mapStateToProps )( Categories );
