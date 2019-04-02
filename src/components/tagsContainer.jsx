import { connect } from 'react-redux';
import tags from './tags';
const mapStateToProps = (state) => {
	var tags = [],
		limit;
	state.issues.map((issue) => {
		limit = issue.tags.length;
		for (var i = 0; i < limit; i++) {
			if (tags.indexOf(issue.tags[i]) === -1) {
				tags.push({ tag: issue.tags[i] });
			}
		}
	});

	return {
		tags: tags
	};
};
const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(tags);
