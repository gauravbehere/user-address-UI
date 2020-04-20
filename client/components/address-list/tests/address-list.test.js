import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddressList from '..';

describe('Test suite for AddressList component', () => {
  it('Should render AddressList component without props', () => {
    const { container, getByTestId } = render(<AddressList/>);
    expect(container).toMatchSnapshot();
    expect(getByTestId('noUserSelectedMsg')).toBeInTheDocument();
  });

  it('Should show No Address Found message if there is no address passed for a selected user', () => {
    const { getByTestId } = render(<AddressList addressList={[]} selelectedUserId={1}/>);
    expect(getByTestId('noAddressFoundMsg')).toBeInTheDocument();
  });

  it('Should show error message if there was an error fetching address', () => {
    const { getByText } = render(<AddressList addressListError='Error'/>);
    expect(getByText('Error')).toBeInTheDocument();
  });

  it('Should show render the address list', () => {
    const { getByText } = render(<AddressList addressList={[{id: 1, text: 'home 1'}]} selelectedUserId={1}/>);
    expect(getByText('home 1')).toBeInTheDocument();
  });
});
