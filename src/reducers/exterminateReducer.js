export default function reducer(state={
    selectedGod: {
      name: null
    }
  }, action) {
    switch (action.type) {
      case "SET_SELECTEDGOD_NAME": {
        return {
          ...state,
          selectedGod: {...state.selectedGod, name: action.payload},
        }
      }
    }
    return state
}