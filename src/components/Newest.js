import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Sidebar from './Container/Sidebar';

class Newest extends Component {

  render() {
    return(
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-12 col-md-12">
                  <h1 className="text-capitalize bottom-line">Newest</h1>
              </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect( mapStateToProps )( Newest );
