import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideBar from './Container/Sidebar';
import { getVideosByCategoryActions } from  '../actions/categoryActions';

class Categories extends Component {
    // constructor (props) {
    //   super(props);
    //
    //   // this.renderVideosByCategory = this.renderVideosByCategory.bind( this );
    // }

    // componentWillReceiveProps( nextProps ) {
    //     this.setState({
    //         categoryVideos: nextProps.categoryVideos
    //     })
    // }

    renderVideosByCategory( selectedCategory ) {
        getVideosByCategoryActions (selectedCategory);
    }

    renderVideos() {

        return this.props.categoryVideos.categoriesVideoResponse.map( ( video ) => {
            return (
                <div
                  key={ video.id }
                  className="col-sm-3 col-md-3 col-md-3 category-list">
                    <div className="thumbnail">
                        <img
                            src={ video.thumbnail }
                            alt={ video.title }
                        />
                    </div>
                    <div className="videoContentBox">
                        <h3>{ video.title }</h3>
                        <hr/>
                        Username: { video.user_id }
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
                    { this.renderVideosByCategory(this.props.params.id) }
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

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ getVideosByCategoryActions: getVideosByCategoryActions }, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )( Categories );
