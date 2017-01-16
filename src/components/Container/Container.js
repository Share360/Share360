import React from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default class Container extends React.Component {
	render() {
		return (
			<div id="container-wrapper">
				<Navbar />
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
						{this.props.children}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
