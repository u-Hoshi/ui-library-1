import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import CustomButton from '.';

describe('CustomButton component', () => {
  it('renders the given text', () => {
    const { getByText } = render(
      <CustomButton
        text="hoge"
        onClick={() => {}}
        color="primary"
      />,
    );
    expect(getByText('hoge')).toBeInTheDocument();
  });

  it('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <CustomButton
        text="Test Button"
        onClick={handleClick}
        color="primary"
      />,
    );
    fireEvent.click(getByText('Test Button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
