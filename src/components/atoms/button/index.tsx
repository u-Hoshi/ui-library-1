import { Button, ButtonProps, useTheme } from '@mui/material';
import React from 'react';

import { buttonStyle } from './index.style';

interface Props extends ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: 'warning' | 'primary' | 'secondary';
}

const CustomButton = (props: Props) => {
  const theme = useTheme();
  return (
    <Button
      onClick={props.onClick}
      sx={buttonStyle({ theme, color: props.color })}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
