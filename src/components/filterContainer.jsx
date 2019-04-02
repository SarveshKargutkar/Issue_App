import { connect } from 'react-redux'
import filter from './filter'
const mapStateToProps = (state) => {
  var array, count ,limit1,limit2,count2=0
  count = state.chips.length
  if (count === 0) {
    array = state.issues
  }
  else {
    array = []
    array=state.issues.filter((issue)=>{
      limit1=issue.tags.length
      limit2=state.chips.length
      for(var i=0;i<limit1;i++){
        for(var j=0;j<limit2;j++){
          if(issue.tags[i]===state.chips[j].text){
            return true
          }
        }
      }
      
    })
  }
  count=array.length
  return {
    closed:count2,
    open: count,
    filter:state.status
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: status => {
        dispatch({ type: "CHANGE_STATUS", status:status.text})
    },
    changeSorting: sort => {
        dispatch({ type: "CHANGE_SORTING", sort:sort.text})
    },


  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(filter)

