import React, { Component } from 'react';
import UserList from './components/user-list';
import { connect } from 'react-redux';
import { fetchUsers, fetchAddress, setSelectedUser } from './actions';
import AddressList from './components/address-list';
import './global-styles.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  onUserClicked(id) {
    this.props.dispatch(setSelectedUser.call(this, id));
    this.props.dispatch(fetchAddress.call(this, id));
  }

  render() {
    return (
      <div className='page-container'>
        <UserList
          userList={this.props.userList}
          onUserClicked={this.onUserClicked.bind(this)}
          selelectedUserId={this.props.selelectedUserId}
          userListError={this.props.userListError}>
        </UserList>
        <AddressList
          addressList={this.props.addressList}
          selelectedUserId={this.props.selelectedUserId}
          addressListError={this.props.addressListError}>
        </AddressList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
    selelectedUserId: state.selelectedUserId,
    addressList: state.addressList,
    userListError: state.userListError,
    addressListError: state.addressListError
  };
}

export default connect(mapStateToProps)(App);
