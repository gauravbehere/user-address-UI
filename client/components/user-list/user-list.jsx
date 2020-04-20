import React from 'react';
import './styles.css';

const UserList = ({ userList, onUserClicked, selelectedUserId, userListError }) => {
  return (
    <div className='user-list'>
      <div className='user-list-header'>List of Users</div>
      {
        userList && userList.length ?
          userList.map((user, key) => {
            return (
              <div key={key} data-testid={'user-list-item-' + key + (user.id === selelectedUserId ? '-active' : '')}
                className={user.id === selelectedUserId ? 'user-list-item active' : 'user-list-item'}
                onClick={() => onUserClicked(user.id)}>
                <div>{user.name}</div>
                <div>Age: {user.age}</div>
                <div>Employee#: {user.empId}</div>
                <div>Gender: {user.gender}</div>
              </div>
            )
          }) : !userListError ?
            <div data-testid='noUserMsg'>No user found</div> :
            <div>{userListError}</div>
      }
    </div>
  )
};

export default UserList;
