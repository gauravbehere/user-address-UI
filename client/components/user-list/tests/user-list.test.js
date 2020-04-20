import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from '..';

describe('Test suite for UserList component', () => {
  const mockUserList = [{name:'Abc', empId: 123, gender: 'M', id: 2}];

  it('Should render UserList component without props', () => {
    const { container, getByTestId } = render(<UserList/>);
    expect(container).toMatchSnapshot();
    expect(getByTestId('noUserMsg')).toBeInTheDocument();
  });

  it('Should render UserList component with error shown if there was an error fetching users', () => {
    const { getByText } = render(<UserList userListError='Error'/>);
    expect(getByText('Error')).toBeInTheDocument();
  });

  it('Should render UserList with the users passed', () => {
    const { getByText } = render(<UserList userList={mockUserList}/>);
    expect(getByText('Abc')).toBeInTheDocument();
  });

  it('Should let the parent component know about the user selected', () => {
    const onUserClicked = jest.fn();
    const { getByText, getByTestId } = render(<UserList userList={mockUserList} onUserClicked={onUserClicked}/>);
    expect(getByText('Abc')).toBeInTheDocument();
    fireEvent.click(getByTestId('user-list-item-0'));
    expect(onUserClicked).toHaveBeenCalledWith(2);
  });

  it('Should highlight the user selected', () => {
    const onUserClicked = jest.fn();
    const { getByTestId } = render(<UserList userList={mockUserList} onUserClicked={onUserClicked} selelectedUserId={2}/>);
    expect(getByTestId('user-list-item-0-active')).toBeInTheDocument();
  });
});
