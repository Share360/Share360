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
        return this.props.categoryVideos.videos.map( ( video ) => {
            return (
                <div key={ video.id }
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
            )
        })
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

// function mapDispatchToProps( dispatch ) {
//     return bindActionCreators({ getVideosByCategoryActions: getVideosByCategoryActions }, dispatch)
// }

function mapStateToProps(state) {
  return {
    categoryVideos: state.categoryVideos
  };
}



export default connect( mapStateToProps )( Categories );
