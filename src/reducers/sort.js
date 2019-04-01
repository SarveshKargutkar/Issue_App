const sort = (state = "newest", action) => {
  switch (action.type) {
    case 'CHANGE_SORTING':
      return state=action.sort
    default:
      return state
  }
}
export default sort