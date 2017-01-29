import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to={`/profile/${this.props.user_id}`}>{this.props.username}</Link>
				<p><i>{this.props.time}</i></p>
				<p>{this.props.content}</p>
				<hr />
			</div>
		);
	}
}
