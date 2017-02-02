import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to={`/profile/${this.props.user_id}`}>{this.props.username}</Link>
				<p><i>{moment(this.props.time).format("M/D/YYYY h:mm A")}</i></p>
				<p>{this.props.content}</p>
				<hr />
			</div>
		);
	}
}
