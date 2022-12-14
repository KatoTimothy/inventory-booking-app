import constants from "../constants";

const {
  SET_GROUP,
  SET_BOOKABLE,
  NEXT_BOOKABLE,
  FETCH_BOOKABLES_REQUEST,
  FETCH_BOOKABLES_SUCCESS,
  FETCH_BOOKABLES_ERROR,
} = constants;

const bookablesReducer = (state, action) => {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...state,
        group: action.payload,
        bookableIndex: 0,
      };
    case SET_BOOKABLE:
      return {
        ...state,
        bookableIndex: action.payload,
      };
    case NEXT_BOOKABLE:
      const bookablesInGroupCount = state.bookables.filter(
        (bookable) => bookable.group === state.group
      ).length;

      return {
        ...state,
        bookableIndex: (state.bookableIndex + 1) % bookablesInGroupCount,
      };
    case FETCH_BOOKABLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
        bookables: [],
      };
    case FETCH_BOOKABLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookables: action.payload,
      };
    case FETCH_BOOKABLES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default bookablesReducer;
