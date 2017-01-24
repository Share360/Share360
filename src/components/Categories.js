import React, {Component} from 'react';
import { connect } from 'react-redux';

import SideBar from './Container/Sidebar';

class Categories extends Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h1>Categories</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-3">
                      test
                    </div>
                    <div className="col-sm-3 col-md-3">
                      test
                    </div>
                    <div className="col-sm-3 col-md-3">
                      test
                    </div>
                    <div className="col-sm-3 col-md-3">
                      test
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    loginStatus : state.loginStatus
  };
}

export default connect(mapStateToProps)(Categories);
