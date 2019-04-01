import { combineReducers } from 'redux'
import issues from './issues' 
import issue from './issue'
import chips from './chips'
import status from './status'
import sort from './sort'
import search from './search'
export default combineReducers({
  issues,
  issue,
  chips,
  status,
  sort,
  search,
})