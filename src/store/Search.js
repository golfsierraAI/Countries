var Search = (state = { value: [] }, action) => {
  switch (action.type) {
    case "SEARCHED": {
      return { value: action.load };
    }
    default:
      return state;
  }
};
export default Search;
