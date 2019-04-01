const issues = (state = [], action) => {
  switch (action.type) {
    case 'ISSUE':

      return state={
          title: action.title,
          description: action.description,
          tags: action.tags,
          time: action.time,
        }
      

    default:
      return state

  }
}
export default issues