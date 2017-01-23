import React from 'react';
import { Link } from 'react-router';

export default class SearchResult extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		window.location = '/#/video/' + this.props.id;
	}

	render() {
		return (
			<div className="col-xs-12">
				<div className="thumbnail">
					<div className="row">
						<div className="col-xs-12 col-sm-4 col-md-3">
							<img onClick={this.handleClick.bind(this)} className="img-responsive" src={this.props.thumbnail_url} alt={this.props.title} />
						</div>
						<div className="col-xs-12 col-sm-8 col-md-9">
							<h4><Link to={'/video/' + this.props.id}>{this.props.title}</Link></h4>
							<p><strong>Description: </strong>{this.props.description}</p>
							<p><strong>Uploader: </strong>{this.props.uploader_id}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
