import * as actions from '..';

describe('Test suite for actions', () => {
  let fetchMock = null;
  const respondWith = (obj, status) => {
    return () => Promise.resolve({
      json: () => Promise.resolve(obj),
      status
    });
  };
  const rejectFetch = (reason) => {
    return () => Promise.reject(reason)
  }

  beforeEach(() => {
    fetchMock = (obj, status) => {
      global.window.fetch = jest.fn().mockImplementation(respondWith(obj, status));
    }
  });

  it('Should dispatch fetched user action with data', async () => {
    fetchMock([], 200);
    const dispatchMock = jest.fn();
    const actionCreator = await actions.fetchUsers();
    await actionCreator(dispatchMock);
    await expect(dispatchMock).toHaveBeenCalledWith({ type: actions.actionConstants.USER_FETCHED, payload: [] });
  });

  it('Should dispatch fetched user action with error', async () => {
    fetchMock([], 500);
    const dispatchMock = jest.fn();
    const actionCreator = await actions.fetchUsers();
    await actionCreator(dispatchMock);
    await expect(dispatchMock).toHaveBeenCalledWith({ type: actions.actionConstants.USER_FETCH_ERROR, payload: 'Unable to fetch user list' })
  });

  it('Should dispatch fetched user action with error when fetch fails', async () => {
    fetchMock = () => {
      global.window.fetch = jest.fn().mockImplementation(rejectFetch());
    }
    fetchMock();
    const dispatchMock = jest.fn();
    const actionCreator = await actions.fetchUsers();
    await actionCreator(dispatchMock);
    await expect(dispatchMock).toHaveBeenCalledWith({ type: actions.actionConstants.USER_FETCH_ERROR, payload: 'Unable to fetch user list' })
  });

  it('Should dispatch fetched address action with data', async () => {
    fetchMock([], 200);
    const dispatchMock = jest.fn();
    const actionCreator = await actions.fetchAddress();
    await actionCreator(dispatchMock);
    await expect(dispatchMock).toHaveBeenCalledWith({ type: actions.actionConstants.ADDRESS_FETCHED, payload: [] });
  });

  it('Should dispatch fetched address action with error', async () => {
    fetchMock([], 500);
    const dispatchMock = jest.fn();
    const actionCreator = await actions.fetchAddress();
    await actionCreator(dispatchMock);
    await expect(dispatchMock).toHaveBeenCalledWith({ type: actions.actionConstants.ADDRESS_FETCH_ERROR, payload: 'Unable to fetch address list' })
  });

  it('Should dispatch fetched address action with error when fetch fails', async () => {
    fetchMock = () => {
      global.window.fetch = jest.fn().mockImplementation(rejectFetch());
    }
    fetchMock();
    const dispatchMock = jest.fn();
    const actionCreator = await actions.fetchAddress();
    await actionCreator(dispatchMock);
    await expect(dispatchMock).toHaveBeenCalledWith({ type: actions.actionConstants.ADDRESS_FETCH_ERROR, payload: 'Unable to fetch address list' })
  });
});
