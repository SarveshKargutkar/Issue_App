import { connect } from 'react-redux';
import issuelist from './issuelist';
const mapStateToProps = (state) => {
	var array, count, limit1, limit2;
	count = state.chips.length;
	
	if (count === 0) {
		array = state.issues.filter((issue) => {
			limit1 = issue.tags.length;
			for (var i = 0; i < limit1; i++) {
				if (issue.isOpen === state.status) {
					return true;
				}
			}
		});
	} else {
		array = state.issues.filter((issue) => {
			limit1 = issue.tags.length;
			limit2 = state.chips.length;
			for (var i = 0; i < limit1; i++) {
				for (var j = 0; j < limit2; j++) {
					if (issue.tags[i] === state.chips[j].text && issue.isOpen === state.status) {
						return true;
					}
				}
			}
		});
	}
    var updatedList = array;
    updatedList = updatedList.filter((item)=>{
      return item.title.toLowerCase().search(
        state.search.toLowerCase()) !== -1;
    });
    array= updatedList;
		array = array.sort(function(a, b) {
		var value1 = a.title.toLowerCase(),
			value2 = b.title.toLowerCase(),
			date1 = a.time,
			date2 = b.time;
		if (state.sort === 'atoz') {
			if (value1 < value2) return -1;
			else if (value1 > value2) return 1;
		} else if (state.sort === 'ztoa') {
			if (value1 < value2) return 1;
			else if (value1 > value2) return -1;
		} else if (state.sort === 'newest') {
      if (date1 < date2) return 1;
			if (date1 > date2) return -1;
		}else if (state.sort === 'oldest') {
      if (date1 < date2) return -1;
			if (date1 > date2) return 1;
		}
		return 0;
  });

	return {
		issue: array
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addissue: issue => {
		    dispatch({ type:"ISSUE", title:issue.title,description:issue.description,tags:issue.tags,time:issue.time})
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(issuelist);
