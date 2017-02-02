import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getSubscriptions } from '../actions/getSubscriptionsActions';


class Subscriptions extends Component {


    getUsersSubscriptions() {
        this.props.dispatch( getSubscriptions( this.props.loginStatus.id ) );
    }

    componentDidMount(){
        this.getUsersSubscriptions()
    }


    renderSubscribed() {
        return this.props.usersSubscriptions.usersSubscriptions.map( ( profile ) => {
            return (
                <div key={ profile.id } className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="subscription-list">
                            <div className=" col-sm-12 col-md-12 col-lg-12 ">
                                <Link to={"/profile/" + profile.id } className="col-sm-3 col-md-3 col-lg-3 flex-wrapper">
                                    <img src={ profile.profile_url } className="test-one" />
                                    <span className="prof-title prof-head-tag text-center test-two">{ profile.username }</span>
                                </Link>

                                <div className="col-md-9">
                                    { profile.description }
                                </div>
                            </div>
                        </div>


                    </div>
                    <hr />
                </div>

            );
        });
    }


    render(){

        return(
            <div>
                <top>
                    <h1 className="bottom-line">Subscriptions</h1>
                    <hr/>
                </top>
                <main-body className="container-fluid">
                    <div className="row">
                        { this.renderSubscribed() }
                    </div>
                </main-body>
            </div>
        )
    }
}


function mapStateToProps( state ){
    return {
        loginStatus: state.loginStatus,
        usersSubscriptions : state.usersSubscriptions
    };
}

export default connect( mapStateToProps)( Subscriptions );
