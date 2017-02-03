import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-2 col-md-1">
					<img src={this.props.profile_url} className="img-circle comment-image" />
				</div>
				<div className="col-sm-10 col-md-11">
					<div>
						<Link to={`/profile/${this.props.user_id}`}>{this.props.username}</Link>
						<p><i>{moment(this.props.time).format("M/D/YYYY h:mm A")}</i></p>
						<p>{this.props.content}</p>
						<hr />
					</div>
				</div>
			</div>
		);
	}
}
