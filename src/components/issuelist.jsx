import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Paper, Chip } from '@material-ui/core';
import history from '../history';
const styles = (theme) => ({
	root: {
		padding: '20px',
		paddingTop: '0'
	},
	chip: {
		backgroundColor: '#7057FF',
		marginLeft: '10px',
		borderRadius: '0',
		height: '20px'
	},
	paper: {
		overflowY: 'auto'
	},
	ListItem: {
		padding: '5px 20px',

		borderBottom: '1px solid #e1e4e8',
		'&:focus': {
			backgroundColor: '#F6F8FA'
		},
		'&:hover': {
			backgroundColor: '#F6F8FA',
			color: 'blue'
		}
	}
});

class Issuelist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(issue) {
		this.props.addissue({ title: issue.title, description: issue.description, tags: issue.tags, time: issue.time });
		history.push('/issue');
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<Paper className={this.props.classes.paper}>
					{this.props.issue.map((issue) => {
						return (
							<List key={issue.title}>
								<ListItem
									button
									component="a"
									onClick={() => this.handleClick(issue)}
									className={this.props.classes.ListItem}
								>
									{issue.title}
									{issue.tags.map((tag) => <Chip label={tag} className={this.props.classes.chip} />)}
								</ListItem>
							</List>
						);
					})}
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(Issuelist);
