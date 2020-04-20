import React from 'react';
import './styles.css';

const AddressList = ({ addressList, selelectedUserId, addressListError }) => {
  return (
    <div className='address-list'>
      <div className='address-list-header'>Address List</div>
      {
        addressList && addressList.length ?
          addressList.map((address, key) => {
            return (
              <div key={key} className='address-list-item'>{address.text}</div>
            )
          }) : addressListError ?
            <div>{addressListError}</div>
            : selelectedUserId ?
              <div data-testid='noAddressFoundMsg'>No address found</div>
              : <div data-testid='noUserSelectedMsg'>Pick a user</div>
      }
    </div>
  )
};

export default AddressList;
