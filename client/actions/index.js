const actionConstants = {
  SELECT_USER: 'SELECT_USER',
  USER_FETCHED: 'USER_FETCHED',
  ADDRESS_FETCHED: 'ADDRESS_FETCHED',
  ADDRESS_FETCH_ERROR: 'ADDRESS_FETCH_ERROR',
  USER_FETCH_ERROR: 'USER_FETCH_ERROR'
}

const setSelectedUser = (id) => {
  return function (dispatch) {
    dispatch({ type: actionConstants.SELECT_USER, payload: id });
  }
}

const fetchUsers = () => {
  return async function (dispatch) {
    const response = await fetch('http://localhost:5000/getUsers', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch(() => {
      dispatch({ type: actionConstants.USER_FETCH_ERROR, payload: 'Unable to fetch user list' });
    });
    if (response) {
      const data = await response.json();
      if (response.status === 200) {
        dispatch({ type: actionConstants.USER_FETCHED, payload: data });
      }
      else {
        dispatch({ type: actionConstants.USER_FETCH_ERROR, payload: 'Unable to fetch user list' });
      }
    }
  }
}

const fetchAddress = (id) => {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:5000/getAddress/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch(() => {
      dispatch({ type: actionConstants.ADDRESS_FETCH_ERROR, payload: 'Unable to fetch address list' });
    });
    if (response) {
      const data = await response.json();
      if (response.status === 200) {
        dispatch({ type: actionConstants.ADDRESS_FETCHED, payload: data });
      }
      else {
        dispatch({ type: actionConstants.ADDRESS_FETCH_ERROR, payload: 'Unable to fetch address list' })
      }
    }
  }
}

export {
  actionConstants, fetchUsers, fetchAddress, setSelectedUser
};
