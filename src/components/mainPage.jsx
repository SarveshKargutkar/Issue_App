import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Appbar from './appbar';
import Searchbar from './SearchbarContainer';
import Filter from './filterContainer';
import Issuelist from './issuelistContainer';
// import AddIssue from './addissue';

const styles = (theme) => ({
	root: {
		height: '100vh',
		overflow: 'auto'
	}
});

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<Appbar />
				<Searchbar />
				<Filter />
				<Issuelist />
			</div>
		);
	}
}

export default withStyles(styles)(MainPage);
