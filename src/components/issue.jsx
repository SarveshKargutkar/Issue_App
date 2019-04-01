import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Appbar from './appbar';
import { Chip } from '@material-ui/core';
const styles = (theme) => ({
	root: {},
	content: {
		display: 'flex',
		padding: '20px'
	},
	maincontent: {
		flexGrow: 1
	},
	header1: {
		marginTop: '0'
	},
	tags: {
		display: 'flex',
		flexDirection: 'column'
	},
	tag: {
		marginTop: '10px'
	}
});

class Issue extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		//   filter: "open",
		// }
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<Appbar />
				<div className={this.props.classes.content}>
					<div className={this.props.classes.maincontent}>
						<h1 className={this.props.classes.header1}>{this.props.issue.title}</h1>
						<h3>{this.props.issue.description}</h3>
					</div>
					<div className={this.props.classes.tags}>
						<h2 className={this.props.classes.header1}>Tags</h2>
						{this.props.issue.tags.map((tag) => <Chip label={tag} className={this.props.classes.tag} />)}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Issue);
