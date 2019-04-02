import { connect } from 'react-redux';
import issue from './issue';
const mapStateToProps = (state) => {

	return {
		issue: state.issue
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(issue);
