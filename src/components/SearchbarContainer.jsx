import { connect } from 'react-redux'
import Searchbar from './Searchbar'
const mapStateToProps = (state) => {
  var tags = [], limit
  state.issues.map((issue) => {
    limit = issue.tags.length
    for (var i = 0; i < limit; i++) {
      if (tags.indexOf(issue.tags[i]) === -1) {
        tags.push(issue.tags[i])
      }
    }
  })
  return {
    tags: tags,
    chips: state.chips,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addChip: chip => {
      dispatch({ type: "ADD_CHIP", chip: chip.chipsText })
    },
    deleteChip: chip => {
      dispatch({ type: "DELETE_CHIP", chip: chip.chipsText })
    },
    search: search=>{
      dispatch({type:"SEARCH",search:search.text})
    }

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar)

