var InitalReducer = (state = { value: null }, action) => {
  switch (action.type) {
    case "LOADED": {
      return { ...state, value: action.load };
    }
    default:
      return state;
  }
};
export default InitalReducer;
