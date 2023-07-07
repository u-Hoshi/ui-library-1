import { IconButton, IconButtonProps } from '@mui/material';
import React from 'react';

interface Props extends IconButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomIconButton = (props: Props) => (
  <IconButton
    onClick={props.onClick}
    sx={props.sx}
  >
    {props.children}
  </IconButton>
);

export default CustomIconButton;
