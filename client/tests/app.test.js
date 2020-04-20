import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../app.jsx';

describe('Test suite for App component', () => {

  const mockUserList = [{ name: 'Abc', empId: 123, gender: 'M', id: 2 }];
  const mockAddressList = [{text: 'Home 1', id: 1}];
  let fetchMock = null;
  const createStore = configureMockStore([thunk]);

  const getStore = (data) => {
    return createStore(data);
  }
  const respondWith = (obj, status) => {
    return () => Promise.resolve({
      json: () => Promise.resolve(obj),
      status
    });
  };

  beforeEach(() => {
    fetchMock = (obj, status) => {
      global.window.fetch = jest.fn().mockImplementation(respondWith(obj, status));
    }
  });

  it('Should render UserList component intially, fetching the users ', () => {
    const store = getStore({
      selelectedUserId: null,
      userList: mockUserList,
      addressList: [],
      userListError: null,
      addressListError: null
    });
    fetchMock(mockUserList, 200);
    const { container, getByText } = render(<Provider store={store}><App /></Provider>);
    expect(container).toMatchSnapshot();
    expect(getByText('Abc')).toBeInTheDocument();
  });

  it('Should render AddressList when there is a user selected', () => {
    const store = getStore({
      selelectedUserId: 1,
      userList: mockUserList,
      addressList: [{text: 'Home 1', id: 1}],
      userListError: null,
      addressListError: null
    });
    fetchMock(mockUserList, 200);
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    expect(getByText('Home 1')).toBeInTheDocument();
  });


  it('Should fetch AddressList when a user is selected', () => {
    const store = getStore({
      selelectedUserId: 1,
      userList: mockUserList,
      addressList: [],
      userListError: null,
      addressListError: null
    });
    fetchMock(mockUserList, 200);
    const { getByTestId } = render(<Provider store={store}><App /></Provider>);
    fetchMock(mockAddressList, 200);
    fireEvent.click(getByTestId('user-list-item-0'));
    expect(fetch).toHaveBeenCalled();
  });

});