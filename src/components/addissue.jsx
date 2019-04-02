import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Chip,
	TextField,
	Button,
	InputAdornment,
	IconButton
} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import history from '../history';
const styles = (theme) => ({
	root: {
		// height: "100vh",
		// overflow: "hidden",
		// width:"500px"
	},
	dialog: {
		wdith: '80%',
		margin: 0
	},
	create: {
		color: '#2CBC4D'
	},
	dialogcontent: {},
	textField: {
		marginTop: '5px',
		marginBottom: '10px'
	}
});

class AddIssue extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			tag: '',
			tags: []
		};
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.handleTags = this.handleTags.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.addIssue = this.addIssue.bind(this);    
	}
	handleCancel(event) {
		history.push('/mainpage');
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	handleTags(event) {
		this.setState({ tags: [...this.state.tags,this.state.tag] ,tag:''});
  }
  handleDelete(chip){
    this.setState({
      tags: this.state.tags.filter(tag => ((chip !== tag)
      )
      )
  })
  }
  addIssue(){
    this.setState({title:'',description:'',tags:[]})
    this.props.addIssue({title:this.state.title,description:this.state.description,tags:this.state.tags})
    history.push('/mainpage');
}
	render() {
		return (
			<div className={this.props.classes.root}>
				<Dialog open={true} className={this.props.classes.dialog} maxWidth={'md'} fullWidth={true}>
					<DialogTitle id="form-dialog-title">Add Issue</DialogTitle>

					<DialogContent className={this.props.classes.dialogcontent}>
						<TextField
							className={this.props.classes.textField}
							id="title"
							label="Title"
              name="title"
              
							fullWidth
							variant="outlined"
							value={this.state.title}
							onChange={this.handleChange}
						/>

						<TextField
							className={this.props.classes.textField}
							id="description"
							label="Description"
							name="description"
							fullWidth
							multiline
							rows="4"
							variant="outlined"
							value={this.state.description}
							onChange={this.handleChange}
						/>
						<TextField
							className={this.props.classes.textField}
							id="tag"
							label="Tags"
							fullWidth
							variant="outlined"
							name="tag"
							value={this.state.tag}
							onChange={this.handleChange}              
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={this.handleTags}>
											<Add />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
						{this.state.tags.map((chip) => (
							<Chip
								label={chip}
								onDelete={() =>
									this.handleDelete(chip)}
								className={this.props.classes.chip}
							/>
						))}
					</DialogContent>
					<DialogActions>
						<Button color="secondary" onClick={this.handleCancel}>
							Cancel
						</Button>
						<Button className={this.props.classes.create} onClick={this.addIssue}>Create Issue</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddIssue);
