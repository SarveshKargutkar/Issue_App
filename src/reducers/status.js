const status = (state = "open", action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return state=action.status
    default:
      return state
  }
}
export default status