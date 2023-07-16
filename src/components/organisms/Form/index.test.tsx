import { fireEvent, render, screen } from '@testing-library/react';

import CustomForm from '.';

describe('CustomForm', () => {
  it('renders with the first avatar selected', () => {
    render(<CustomForm />);
    const avatars = screen.getAllByRole('img');
    expect(avatars[0].getAttribute('src')).toContain('/1221.png');
  });

  it('changes selected avatar on click', () => {
    render(<CustomForm />);
    const avatars = screen.getAllByRole('img');
    const clickAvatars = screen.getByRole('img', { name: 'バナナ' });
    fireEvent.click(clickAvatars);

    expect(avatars[0].getAttribute('src')).toContain('/2412.png');
  });
});
