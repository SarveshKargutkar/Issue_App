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
    flexDirection: 'column',
    // alignItems:"start"
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
        <div className={this.props.classes.tags}>
        {this.props.tags.map((tag) => <Chip label={tag.tag} className={this.props.classes.tag} /> )}
        </div>
			</div>
		);
	}
}

export default withStyles(styles)(Issue);
