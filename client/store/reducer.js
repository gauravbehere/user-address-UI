import { actionConstants } from '../actions';

const initialState = {
  selelectedUserId: null,
  userList: [],
  addressList: [],
  userListError: null,
  addressListError: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.SELECT_USER:
      return { ...state, selelectedUserId: action.payload };
    case actionConstants.USER_FETCHED:
      return { ...state, userList: action.payload };
    case actionConstants.USER_FETCH_ERROR:
      return { ...state, userListError: action.payload };
    case actionConstants.ADDRESS_FETCHED:
      return { ...state, addressList: action.payload, addressListError: null };
    case actionConstants.ADDRESS_FETCH_ERROR:
      return { ...state, addressListError: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
