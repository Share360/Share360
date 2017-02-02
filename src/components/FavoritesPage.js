import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import searchActions from '../actions/searchActions';
import SearchResult from './Search/SearchResult';
import moment from 'moment';

class FavoritesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.loginStatus.id) {
            this.props.dispatch(searchActions.getFavorites(this.props.loginStatus.id));
        }
    }

    renderFavorites() {
        return this.props.favorites.map((video, index) => {
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
                        <b>Uploader: </b><Link to={"/profile/" + video.uploader_id}>{video.username}</Link>
                        <br />
                        <b>Uploaded: {moment(video.upload_date).format("MMM D, YYYY")}</b>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.props.loginStatus.loggedIn) {
            return (
                <div className="container-fluid">
                    <h1><span className="text-capitalize">{this.props.loginStatus.username}</span>'s Favorites</h1>

                    { this.props.favorites? ( this.props.favorites.length === 0 ? (<p>You don't have any videos in your favorites!</p>) : (<div className="row">{this.renderFavorites()}</div>) ) : null }

                </div>
            );
        } else {
            return(
                <div className="text-center" style={{marginTop: "15%"}}>
                    <p>Please <Link to="/login">log in</Link> or <Link to="/sign-up">sign up</Link> to access favorites.</p>
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        loginStatus: state.loginStatus,
        favorites: state.searchResults.favorites
    };
}

export default connect(mapStateToProps)(FavoritesPage);
