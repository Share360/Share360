import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import searchActions from '../../actions/searchActions';
import SearchResult from './SearchResult';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(searchActions.getSearchResults(this.props.location.query.search));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.query.search !== nextProps.location.query.search) {
            this.props.dispatch(searchActions.getSearchResults(nextProps.location.query.search)); 
        }
    }

    renderSearchResults() {
        return this.props.searchResults.map((video, index) => {
            return (
                <SearchResult {...video} key={index} />
            );
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Search Results</h1>
                
                { this.props.searchResults? ( this.props.searchResults.length === 0 ? (<p>Your search returned 0 results.</p>) : (<div className="row">{this.renderSearchResults()}</div>) ) : null }
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        searchResults: state.searchResults.results
    };
}

export default connect(mapStateToProps)(SearchPage);