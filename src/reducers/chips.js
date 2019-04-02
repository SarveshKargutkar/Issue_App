const chips = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHIP':
 
      
      return [
        ...state,
        {
          text: action.chip
        }
      ]
    case 'DELETE_CHIP':

      return state.filter(
        chip => {
          if (chip.text === action.chip)
            return false
          else
            return true
        }
      )

    default:
      return state

  }
}
export default chips