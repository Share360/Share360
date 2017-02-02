import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import searchActions from '../actions/searchActions';
import SearchResult from './Search/SearchResult';

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
                <SearchResult {...video} key={index} />
            );
        });
    }

    render() {
        if (this.props.loginStatus.loggedIn) {
            return (
                <div className="container-fluid">
                    <h1>Favorites</h1>

                    { this.props.favorites? ( this.props.favorites.length === 0 ? (<p>You don't have any videos in your favorites!</p>) : (<div className="row clickable">{this.renderFavorites()}</div>) ) : null }

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
