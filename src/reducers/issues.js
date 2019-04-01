const issues = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ISSUE':

      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          tags: action.tags,
          isOpen: "open",
          time: new Date().toLocaleString(),
        }
      ]

    default:
      return state

  }
}
export default issues