import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem, Button, OutlinedInput, FormControl, InputBase, Chip } from '@material-ui/core';
import history from '../history';
const styles = (theme) => ({
	root: {
		// height: "100vh",
		// overflow: "hidden",
	},
	wrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '20px'
	},
	searchbar: {
		display: 'flex',
		// flexGrow: 1,
		alignItems: 'center'
		// maxHeight: "34px",
	},
	search: {
		marginTop: '8px',
		marginBottom: '8px',
		width: 300,
		// width: "100%",
		height: '34px'
	},
	buttons: {
		display: 'flex',
		padding: ' 10px 0 10px 10px',
		justifyContent: 'center'
	},
	Select: {
		height: '34px'
	},
	tag: {
		marginLeft: '10px',
		backgroundColor: '#F6F8FA',
		color: 'black',
		height: '34px',
		'&:focus': {
			backgroundColor: '#F6F8FA'
		},
		'&:hover': {
			backgroundColor: 'white'
		}
	},
	add: {
		backgroundColor: '#2CBC4D',
		color: 'white',
		'&:focus': {
			backgroundColor: '#2CBC4D'
		},
		'&:hover': {
			backgroundColor: '#8bc34a'
		}
	},
	bootstrapInput: {
		borderRadius: 4,
		position: 'relative',
		border: '1px solid #ced4da',
		fontSize: 16,
		width: '100%',
		height: '34px',
		padding: '0 0 0 10px  ',
		// transition: theme.transitions.create(['border-color', 'box-shadow']),

		'&:focus': {
			borderRadius: 4,
			borderColor: '#2196F3',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
		}
	},
	chip: {
		margin: ' 0 20px 20px'
	}
});

class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchtext: ''
		};
		this.handleTags = this.handleTags.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddIssue = this.handleAddIssue.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handletag=this.handletag.bind(this);
	}

	handleTags(event) {
		this.props.addChip({ chipsText: event.target.value });
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	handleAddIssue() {
		history.push('/addissue');
	}
	handleSearch(e) {
		e.preventDefault();
		this.props.search({ text: this.state.searchtext });
	}
	handletag(){
		history.push('/tags')
	}
	render() {
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.wrapper}>
					<div className={this.props.classes.searchbar}>
						<Select
							value=""
							onChange={this.handleTags}
							displayEmpty
							input={<OutlinedInput name="chips" className={this.props.classes.Select} />}
						>
							<MenuItem value="" disabled>
								Tags
							</MenuItem>
							{this.props.tags.map((tags) => <MenuItem value={tags}>{tags}</MenuItem>)}
						</Select>
						<form onSubmit={this.handleSearch}>
							<FormControl className={this.props.classes.search}>
								<InputBase
									name="searchtext"
									placeholder="Search"
									value={this.state.searchtext}
									onChange={this.handleChange}
									classes={{
										root: this.props.classes.bootstrapRoot,
										input: this.props.classes.bootstrapInput
									}}
								/>
							</FormControl>
						</form>
						<Button variant="outlined" onClick={this.handletag} className={this.props.classes.tag}>
							Tags
						</Button>
					</div>
					<div className={this.props.classes.buttons} onClick={this.handleAddIssue}>
						<Button variant="contained" className={this.props.classes.add}>
							Add new Issue
						</Button>
					</div>
				</div>
				<div>
					{this.props.chips.map((chip) => (
						<Chip
							label={chip.text}
							onDelete={() =>
								this.props.deleteChip({
									chipsText: chip.text
								})}
							className={this.props.classes.chip}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Searchbar);
