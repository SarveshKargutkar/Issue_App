const search = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return state = action.search
    default:
      return state
  }
}
export default search