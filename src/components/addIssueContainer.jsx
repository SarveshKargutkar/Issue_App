import { connect } from 'react-redux';
import addIssue from './addissue';
const mapStateToProps = (state) => {

	return {
		// issue: array
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addIssue: issue => {
		    dispatch({ type: "ADD_ISSUE",title: issue.title,description: issue.description,tags: issue.tags,})
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(addIssue);
